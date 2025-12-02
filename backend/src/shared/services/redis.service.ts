import Redis from 'ioredis';
import { logger } from '../utils/logger';

class RedisService {
    private client: Redis | null = null;
    private isConnected = false;

    constructor() {
        this.connect();
    }

    private connect() {
        try {
            const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
            this.client = new Redis(redisUrl, {
                maxRetriesPerRequest: 3,
                retryStrategy: (times) => {
                    if (times > 3) {
                        logger.warn('Redis max retries reached, giving up');
                        return null;
                    }
                    return Math.min(times * 200, 1000);
                },
                lazyConnect: true,
            });

            this.client.on('connect', () => {
                this.isConnected = true;
                logger.info('✓ Redis connected');
            });

            this.client.on('error', (err) => {
                this.isConnected = false;
                logger.warn('Redis connection error (will work without cache):', err.message);
            });

            this.client.on('close', () => {
                this.isConnected = false;
                logger.warn('Redis connection closed');
            });

            // Try to connect (won't throw if fails)
            this.client.connect().catch((err) => {
                logger.warn('Redis not available, continuing without cache:', err.message);
            });
        } catch (error) {
            logger.warn('Redis initialization failed, continuing without cache');
        }
    }

    /**
     * Set a key with optional expiration (in seconds)
     */
    async set(key: string, value: string, expirationSeconds?: number): Promise<void> {
        if (!this.isConnected || !this.client) {
            return; // Silently fail if Redis not available
        }

        try {
            if (expirationSeconds) {
                await this.client.setex(key, expirationSeconds, value);
            } else {
                await this.client.set(key, value);
            }
        } catch (error) {
            logger.warn(`Redis SET error for key ${key}:`, error);
        }
    }

    /**
     * Get a key value
     */
    async get(key: string): Promise<string | null> {
        if (!this.isConnected || !this.client) {
            return null;
        }

        try {
            return await this.client.get(key);
        } catch (error) {
            logger.warn(`Redis GET error for key ${key}:`, error);
            return null;
        }
    }

    /**
     * Delete a key
     */
    async del(key: string): Promise<void> {
        if (!this.isConnected || !this.client) {
            return;
        }

        try {
            await this.client.del(key);
        } catch (error) {
            logger.warn(`Redis DEL error for key ${key}:`, error);
        }
    }

    /**
     * Add value to a set
     */
    async sadd(key: string, value: string): Promise<void> {
        if (!this.isConnected || !this.client) {
            return;
        }

        try {
            await this.client.sadd(key, value);
        } catch (error) {
            logger.warn(`Redis SADD error for key ${key}:`, error);
        }
    }

    /**
     * Check if value exists in set
     */
    async sismember(key: string, value: string): Promise<boolean> {
        if (!this.isConnected || !this.client) {
            return false;
        }

        try {
            const result = await this.client.sismember(key, value);
            return result === 1;
        } catch (error) {
            logger.warn(`Redis SISMEMBER error for key ${key}:`, error);
            return false;
        }
    }

    /**
     * Set expiration on a key
     */
    async expire(key: string, seconds: number): Promise<void> {
        if (!this.isConnected || !this.client) {
            return;
        }

        try {
            await this.client.expire(key, seconds);
        } catch (error) {
            logger.warn(`Redis EXPIRE error for key ${key}:`, error);
        }
    }

    /**
     * Check if Redis is connected
     */
    isReady(): boolean {
        return this.isConnected;
    }

    /**
     * Close Redis connection
     */
    async close(): Promise<void> {
        if (this.client) {
            await this.client.quit();
            this.isConnected = false;
        }
    }
}

// Export singleton instance
export const redisService = new RedisService();

import crypto from 'crypto';
import { logger } from '../utils/logger';

const ALGORITHM = 'aes-256-gcm';

// Get encryption key from environment (32 bytes = 64 hex chars)
const getKey = (): Buffer => {
    const key = process.env.ENCRYPTION_KEY;
    if (!key || key.length !== 64) {
        logger.warn('ENCRYPTION_KEY not set or invalid, using default (INSECURE!)');
        // Default key for development only (NEVER use in production)
        return Buffer.from('0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef', 'hex');
    }
    return Buffer.from(key, 'hex');
};

/**
 * Encrypt a string using AES-256-GCM
 * @param text - Plain text to encrypt
 * @returns Encrypted string in format: iv:authTag:encrypted
 */
export const encrypt = (text: string): string => {
    try {
        const key = getKey();
        const iv = crypto.randomBytes(16); // Initialization vector
        const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        const authTag = cipher.getAuthTag();

        // Return format: iv:authTag:encrypted
        return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
    } catch (error) {
        logger.error('Encryption error:', error);
        throw new Error('Failed to encrypt data');
    }
};

/**
 * Decrypt a string encrypted with encrypt()
 * @param encryptedData - Encrypted string in format: iv:authTag:encrypted
 * @returns Decrypted plain text
 */
export const decrypt = (encryptedData: string): string => {
    try {
        const key = getKey();
        const parts = encryptedData.split(':');

        if (parts.length !== 3) {
            throw new Error('Invalid encrypted data format');
        }

        const [ivHex, authTagHex, encrypted] = parts;
        const iv = Buffer.from(ivHex, 'hex');
        const authTag = Buffer.from(authTagHex, 'hex');

        const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
        decipher.setAuthTag(authTag);

        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        return decrypted;
    } catch (error) {
        logger.error('Decryption error:', error);
        throw new Error('Failed to decrypt data');
    }
};

/**
 * Check if a string is encrypted (has correct format)
 */
export const isEncrypted = (data: string): boolean => {
    return data.split(':').length === 3;
};

/**
 * Encrypt data only if not already encrypted
 */
export const encryptIfNeeded = (data: string): string => {
    return isEncrypted(data) ? data : encrypt(data);
};

/**
 * Generate a random encryption key (32 bytes hex)
 * Use this to generate a new ENCRYPTION_KEY for .env
 */
export const generateEncryptionKey = (): string => {
    return crypto.randomBytes(32).toString('hex');
};

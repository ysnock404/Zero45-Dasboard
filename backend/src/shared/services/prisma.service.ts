import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

// Singleton Prisma Client
const prismaClientSingleton = () => {
    return new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
    globalThis.prismaGlobal = prisma;
}

// Test connection
prisma.$connect()
    .then(() => logger.info('✓ Database connected (Prisma)'))
    .catch((err) => logger.error('✗ Database connection failed:', err));

// Graceful shutdown
process.on('beforeExit', async () => {
    await prisma.$disconnect();
});

export { prisma };

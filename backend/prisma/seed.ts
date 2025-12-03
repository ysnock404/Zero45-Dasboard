import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create admin user
    // Default dev credentials to avoid leaking personal data
    const defaultUsername = 'admin';
    const defaultPassword = 'admin123';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const admin = await prisma.user.upsert({
        where: { username: defaultUsername },
        update: {},
        create: {
            username: defaultUsername,
            password: hashedPassword,
            name: 'Admin User',
            role: 'admin',
        },
    });

    console.log('✓ Admin user created/updated:');
    console.log(`  Username: ${admin.username}`);
    console.log(`  Password: ${defaultPassword}`);
    console.log(`  Role: ${admin.role}`);
    console.log('');
    console.log('🎉 Seeding complete!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Seeding failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });

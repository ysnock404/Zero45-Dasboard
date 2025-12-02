import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin', 10);

    const admin = await prisma.user.upsert({
        where: { email: 'admin@zero45.local' },
        update: {},
        create: {
            email: 'admin@zero45.local',
            password: hashedPassword,
            name: 'Admin User',
            role: 'admin',
        },
    });

    console.log('✓ Admin user created/updated:');
    console.log(`  Email: ${admin.email}`);
    console.log(`  Password: admin`);
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

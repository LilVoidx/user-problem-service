import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const users = Array.from({ length: 1000000 }).map((_, i) => ({
    firstName: `FirstName${i}`,
    lastName: `LastName${i}`,
    age: Math.floor(Math.random() * 80) + 18,
    gender: Math.random() > 0.5 ? 'Male' : 'Female',
    hasProblems: Math.random() > 0.5,
  }));

  const batchSize = 10000;
  for (let i = 0; i < users.length; i += batchSize) {
    const batch = users.slice(i, i + batchSize);

    await prisma.$transaction([prisma.user.createMany({ data: batch })]);

    console.log(`Inserted ${i + batch.length}/${users.length}`);
  }

  console.log('Database seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

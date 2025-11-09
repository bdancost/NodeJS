import { prisma } from '@/prisma'

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Daniel Fernandes',
        email: 'GKg5H@example.com',
      },
      {
        name: 'Diego Fernandes',
        email: 'diego@example.com',
      },
    ],
  })
}

seed().then(() => {
  console.log('Seeding finished.')
  prisma.$disconnect()
})

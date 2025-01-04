import { prisma } from "@/lib/prisma"
import { faker } from '@faker-js/faker'

async function main() {
  for (let index = 0; index < 500; index++) {
    const mila = await prisma.employer.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        cpf: String(faker.number.int()),
        city: faker.location.city(),
        salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
        state: faker.location.state(),
        dateOfBirth: faker.date.past(),
        hireDate: faker.date.recent(),
        job: faker.person.jobTitle(),
      }
    })
  }
}

main().then(async () => {
  await prisma.$disconnect()
  prisma.$disconnect()
})

import { prisma } from "@/lib/prisma"
import { faker } from '@faker-js/faker'

const EMPLOYEES = [
  {
    id: 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 2,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 3,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 4,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 5,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 6,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 7,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 2
  },
  {
    id: 8,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 3
  },
  {
    id: 9,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 2
  },
  {
    id: 10,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 2
  },
  {
    id: 11,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 3
  },
  {
    id: 12,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 3
  },
  {
    id: 13,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 4
  },
  {
    id: 14,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 3
  },
  {
    id: 15,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 4
  },
  {
    id: 16,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 4
  },
  {
    id: 17,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 3
  },
  {
    id: 18,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 1
  },
  {
    id: 19,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    salary: Number(faker.finance.amount({ min: 50000, max: 1000000 })),
    state: faker.location.state(),
    dateOfBirth: faker.date.past(),
    jobId: 4
  },
]

const JOBS = [
  {
    id: 1,
    title: 'Software Engineer',
    categoryId: 1
  },
  {
    id: 2,
    title: 'Doctor',
    categoryId: 2
  },
  {
    id: 3,
    title: 'CEO',
    categoryId: 3
  },
  {
    id: 4,
    title: 'Marketing Director',
    categoryId: 4
  },
]

const CATEGORIES = [
  {
    id: 1,
    name: 'Tecnology'
  },
  {
    id: 2,
    name: 'Health Care'
  },
  {
    id: 3,
    name: 'Administrative'
  },
  {
    id: 4,
    name: 'Marketing'
  },
]

async function main() {
  await Promise.all(
    CATEGORIES.map(category => {
      return prisma.category.create({
        data: {
          id: category.id,
          name: category.name,
        }
      })
    })
  ).then(() => {
    return console.log('SEED - Categories created')
  }).catch((error) => {
    return console.log('SEED - Error creating categories', error)
  })

  await Promise.all(
    JOBS.map(job => {
      return prisma.job.create({
        data: {
          id: job.id,
          title: job.title,
          categoryId: job.categoryId
        }
      })
    })
  ).then(() => {
    return console.log('SEED - Jobs created')
  }).catch((error) => {
    return console.log('SEED - Error creating jobs', error)
  })

  await Promise.all(
    EMPLOYEES.map(employee => {
      return prisma.employee.create({
        data: {
          id: employee.id,
          name: employee.name,
          email: employee.email,
          city: employee.city,
          salary: employee.salary,
          state: employee.state,
          dateOfBirth: employee.dateOfBirth,
          jobId: employee.jobId
        }
      })
    })
  ).then(() => {
    return console.log('SEED - Employees created')
  }).catch((error) => {
    return console.log('SEED - Error creating employees', error)
  })
}

main()
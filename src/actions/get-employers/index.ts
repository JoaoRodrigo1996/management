import 'server-only'

import { prisma } from "@/lib/prisma";
import { network } from "@/utils/network";

export async function getEmployees(page: number, filter?: { q?: string, category?: number }) {
  await network(2000)

  try {
    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        take: 10,
        skip: (page - 1) * 10,
        orderBy: { salary: 'desc' },
        include: {
          job: { 
            select: { 
              title: true,
              categoryId: true
            },
          },
        },
        where: {
          AND: [
            filter?.q ? { OR: [{ name: { contains: filter.q } }] } : {},
            filter?.category ? { job: { categoryId: { equals: filter.category } } } : {}
          ]
        }
      }),
      prisma.employee.count()
    ])

    return { employees, total }
  } catch (error) {
    console.error(error)
    return { employees: [], total: 0 }
  }
}

import 'server-only'

import { prisma } from "@/lib/prisma";
import { network } from "@/utils/network";

export async function getEmployers(page: number, filter?: { q?: string }) {
  await network(2000)

  const [employers, total] = await Promise.all([
    prisma.employer.findMany({
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        name: 'asc'
      },
      where: {
        AND: [
          filter?.q ? {
            OR: [{ name: { contains: filter.q } }, { job: { contains: filter.q } }]
          } : {},
        ]
      }
    }),
    prisma.employer.count()
  ])

  return { employers, total }
}

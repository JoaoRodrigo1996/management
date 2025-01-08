import 'server-only'

import { prisma } from "@/lib/prisma";
import { network } from "@/utils/network";

export async function getEmployers(page: number) {
  await network(1000)

  const [employers, total] = await Promise.all([
    prisma.employer.findMany({
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        name: 'asc'
      }
    }),
    prisma.employer.count()
  ])

  return {employers, total}
}

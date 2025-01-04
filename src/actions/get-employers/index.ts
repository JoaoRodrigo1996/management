'use server'

import { prisma } from "@/lib/prisma";
import { network } from "@/utils/network";

export async function getEmployers() {
  await network(5000)
  const employers = await prisma.employer.findMany();

  return employers
}

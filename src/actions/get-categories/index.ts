import 'server-only'

import { prisma } from "@/lib/prisma";
import { network } from "@/utils/network";

export async function getCategories() {
  await network(2000)

  try {
    const categories = await prisma.category.findMany()

    return { categories }
  } catch (error) {
    console.error(error)
    return { categories: [] }
  }
}

'use client'

import { use, useOptimistic, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Category } from "./category";

interface Category {
  categories: {
    id: number;
    name: string
  }[];
}

interface CategoryProps {
  categoriesPromise: Promise<Category>
}

export function Categories({ categoriesPromise }: CategoryProps) {
  const { categories } = use(categoriesPromise)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [optimisticCategories, setOptimisticCategories] = useOptimistic(searchParams.getAll('category'))

  return (
    <div className='flex space-x-4'>
      {
        categories.map((category => {
          return (
            <Category
              data-pending={optimisticCategories.includes(category.id.toString()) ? 'active' : 'inactive'}
              key={category.id}
              title={category.name}
              defaultValue={optimisticCategories}
              onClick={(event) => {
                const newSearchParams = new URLSearchParams(searchParams)

                newSearchParams.set('category', category.id.toString())

                startTransition(() => {
                  setOptimisticCategories(newSearchParams.getAll('category'))
                  router.push(`?${newSearchParams}`)
                })
              }}
            />
          )
        }))
      }
    </div>
  )
}

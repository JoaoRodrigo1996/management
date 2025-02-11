import { Suspense } from "react";

import { getEmployees } from "@/actions/get-employers";
import { EmployersList } from "@/components/employers-list";
import { EmployersListLoading } from "@/components/employers-list-loading";
import { SearchParams } from "nuqs/server";
import { loadSearchParams } from "@/components/search-params";
import { getCategories } from "@/actions/get-categories";
import { Categories } from "@/components/categories";
import { SearchForm } from "@/components/search-form";
import { CategoriesLoading } from "@/components/categories-loading";

type PageProps = {
  searchParams: Promise<SearchParams>
}

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }: PageProps) {
  const { page, q, category } = await loadSearchParams(searchParams)
  const employees = getEmployees(page, { q, category })
  const categories = getCategories()

  return (
    <>
      <header className='pt-16 pb-5'>
        <h1 className="text-3xl font-semibold tracking-tight leading-normal">
          Employees Management
        </h1>
      </header>

      <SearchForm />

      <Suspense fallback={<CategoriesLoading />}>
        <Categories categoriesPromise={categories} />
      </Suspense>

      <Suspense fallback={<EmployersListLoading />}>
        <EmployersList employeesPromise={employees} page={page} />
      </Suspense>
    </>
  );
}

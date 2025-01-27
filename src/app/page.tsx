import { Suspense } from "react";

import { getEmployers } from "@/actions/get-employers";
import { EmployersList } from "@/components/employers-list";
import { EmployersListLoading } from "@/components/employers-list-loading";
import { SearchParams } from "nuqs/server";
import { loadSearchParams } from "@/components/search-params";

type PageProps = {
  searchParams: Promise<SearchParams>
}

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }: PageProps) {
  const { page, q } = await loadSearchParams(searchParams)
  const employers = getEmployers(page, { q })

  return (
    <>
      <header className='pt-16 pb-5'>
        <h1 className="text-3xl font-semibold tracking-tight leading-normal">
          Employers Management
        </h1>
      </header>

      <Suspense fallback={<EmployersListLoading />}>
        <EmployersList employersPromise={employers} page={page} />
      </Suspense>
    </>
  );
}

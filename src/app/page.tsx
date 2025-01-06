import { Suspense } from "react";

import { getEmployers } from "@/actions/get-employers";
import { EmployersList } from "@/components/employers-list";
import { EmployersListLoading } from "@/components/employers-list-loading";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const employers = getEmployers(page)

  return (
    <>
      <header className='py-5'>
        <h1 className="text-2xl font-semibold tracking-tight leading-normal">
          Employers Management
        </h1>
      </header>

      <Suspense fallback={<EmployersListLoading />}>
        <EmployersList employersPromise={employers} page={page} />
      </Suspense>
    </>
  );
}

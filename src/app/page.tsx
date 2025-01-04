import { EmployersList } from "@/components/employers-list";
import { EmployersListLoading } from "@/components/employers-list-loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <header className='py-5'>
        <h1 className="text-2xl font-semibold tracking-tight leading-normal">Gerenciamento de Funcionários</h1>
      </header>

      <Suspense fallback={<EmployersListLoading />}>
        <EmployersList />
      </Suspense>
    </>
  );
}

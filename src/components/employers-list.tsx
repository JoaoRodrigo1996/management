import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";

import { getEmployers } from "@/actions/get-employers";
import { formatDate } from "@/utils/format-date";
import { formatSalary } from "@/utils/format-salary";

export async function EmployersList(){
  const employers = await getEmployers()

  return (
    <div className="space-y-6 mt-4">
      <div className='flex items-center gap-3 px-4 w-72 py-1.5 border border-white/10 rounded-lg' >
        <input 
          className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" 
          placeholder="Buscar funcionário..." 
        />
        <Search className='size-4 ' />
      </div>
      <section className="border border-white/10 rounded">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold text-left">Nome</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">job</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Date of birth</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Hire date</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Annual salary</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">City</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">State</th>
            </tr>
          </thead>
          <tbody>
            {
              employers.map((employer) => (
                <tr key={employer.id}>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employer.name}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employer.job}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{formatDate(employer.dateOfBirth)}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{formatDate(employer.hireDate)}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{formatSalary(employer.salary)}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employer.city}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employer.state}</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot className="border-t border-white/10">
            <tr>
              <td className="py-5 px-4 text-sm text-zinc-200" colSpan={3}>
                Mostrando {employers.length} de 10 items
              </td>
              <td className='text-right' colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span className="">Página 1 de 10</span>

                  <div className="flex gap-1.5">
                    <button className='bg-white/5 rounded-lg p-2 hover:bg-white/10'>
                      <ChevronsLeft className='size-4' />
                    </button>
                    <button className='bg-white/5 rounded-lg p-2 hover:bg-white/10'>
                      <ChevronLeft className='size-4' />
                    </button>
                    <button className='bg-white/5 rounded-lg p-2 hover:bg-white/10'>
                      <ChevronRight className='size-4' />
                    </button>
                    <button className='bg-white/5 rounded-lg p-2 hover:bg-white/10'>
                      <ChevronsRight className='size-4' />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  )
}
'use client'

import { use, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";

import { formatDate } from "@/utils/format-date";
import { formatSalary } from "@/utils/format-salary";
import { Pagination } from "./pagination";

type Employers = {
  employers: {
    id: string
    name: string
    job: string
    dateOfBirth: Date
    hireDate: Date
    salary: number
    city: string
    state: string
  }[],
  total: number
}

type EmployersListProps = {
  employersPromise: Promise<Employers>
  page: number
}

export function EmployersList({ employersPromise, page }: EmployersListProps) {
  const { employers, total } = use(employersPromise)
  const totalPages = Math.ceil(total / 10)

  return (
    <div className="space-y-6 mt-4">
      <div className='flex items-center gap-3 px-4 w-72 py-1.5 border border-white/10 rounded-lg' >
        <input
          className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"
          placeholder="Search employer..."
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
        </table>

        <Pagination
          employers={employers}
          page={page}
          totalPages={totalPages}
          total={total}
        />
      </section>
    </div>
  )
}

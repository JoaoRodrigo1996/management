'use client'

import { use } from "react";

import { formatDate } from "@/utils/format-date";
import { Pagination } from "./pagination";
import { formatSalary } from "@/utils/format-salary";

type Employee = {
  employees: {
    id: number,
    name: string,
    email: string,
    salary: number,
    dateOfBirth: Date,
    city: string,
    state: string,
    job: {
      title: string
    }
  }[],
  total: number
}

type EmployeesListProps = {
  employeesPromise: Promise<Employee>
  page: number
}

export function EmployersList({ employeesPromise, page }: EmployeesListProps) {
  const { employees, total } = use(employeesPromise)
  const totalPages = Math.ceil(total / 10)

  return (
    <div className="space-y-6 mt-4">
      <section className="border border-white/10 rounded">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold text-left">Name</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">job</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Date of birth</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Annual salary</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">City</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">State</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-3 px-4 text-sm font-medium text-zinc-200 text-center">No employees found</td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-zinc-900 transition-colors">
                  <td className="py-3 px-4 text-sm text-zinc-200">{employee.name}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employee.job.title}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{formatDate(employee.dateOfBirth)}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{formatSalary(employee.salary)}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employee.city}</td>
                  <td className="py-3 px-4 text-sm text-zinc-200">{employee.state}</td>
                </tr>
              ))
            )
            }
          </tbody>
        </table>

        <Pagination
          employees={employees}
          page={page}
          totalPages={totalPages}
          total={total}
        />
      </section>
    </div>
  )
}

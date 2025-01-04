export function EmployersListLoading() {
  return (
    <div className="space-y-6 mt-4">
      <div className='flex items-center gap-3 px-4 w-72 py-1.5' >

        <div className='flex-1 size-4 animate-pulse bg-white/10 h-5  rounded-lg' />

        <div className='size-4 animate-pulse bg-white/10 h-5 w-5 rounded-full' />
      </div>
      <section className="border border-white/10 rounded">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Array.from({ length: 10 }).map((_, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-200">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </td>
                </tr>
              ))
            }
          </tbody>
          <tfoot className="border-t border-white/10">
            <tr>
              <td className="py-5 px-4 text-sm text-zinc-200" colSpan={3}>
                <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
              </td>
              <td className='text-right' colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span className="">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-20 rounded-lg' />
                  </span>

                  <div className="flex gap-1.5">
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-5 rounded-lg' />
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-5 rounded-lg' />
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-5 rounded-lg' />
                    <div className='size-4 animate-pulse bg-white/10 h-5 w-5 rounded-lg' />
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

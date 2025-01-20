import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";

type PaginationProps = {
  page?: number
  totalPages: number
  total: number
  employers: any
}

export function Pagination({ employers, total, totalPages, page = 1 }: PaginationProps) {
  const router = useRouter()

  return (
    <div className='flex justify-between items-center px-4 py-3 border-t border-white/10'>
      <div className="text-sm text-zinc-200">
        Showing {employers.length} of {total} items
      </div>
      <div className='text-right'>
        <div className="inline-flex items-center gap-8">
          <span className="text-sm text-zinc-200">Page {page} of {totalPages}</span>

          <div className="flex gap-1.5">
            <button disabled={page <= 1} onClick={() => router.push(`/?page=${1}`)} className='disabled:cursor-not-allowed disabled:bg-zinc-900 bg-zinc-800 rounded-lg p-2 hover:bg-zinc-800/95'>
              <ChevronsLeft className='size-4' />
            </button>
            <button disabled={page <= 1} onClick={() => router.push(`/?page=${page - 1}`)} className='disabled:cursor-not-allowed disabled:bg-zinc-900 bg-zinc-800 rounded-lg p-2 hover:bg-zinc-800/95'>
              <ChevronLeft className='size-4' />
            </button>
            <button disabled={page >= totalPages} onClick={() => router.push(`/?page=${page + 1}`)} className='disabled:cursor-not-allowed disabled:bg-zinc-900 bg-zinc-800 rounded-lg p-2 hover:bg-zinc-800/95'>
              <ChevronRight className='size-4' />
            </button>
            <button disabled={page >= totalPages} onClick={() => router.push(`/?page=${totalPages}`)} className='disabled:cursor-not-allowed disabled:bg-zinc-900 bg-zinc-800 rounded-lg p-2 hover:bg-zinc-800/95'>
              <ChevronsRight className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

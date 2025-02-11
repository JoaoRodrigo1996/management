'use client'

import Form from 'next/form'
import { Loader2, Search, X } from "lucide-react";
import { useSearchParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function SearchForm() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function handleClearInput() {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.delete('q')
    startTransition(() => {
      router.push(`?${newSearchParams.toString()}`)
    })
  }

  return (
    <Form
      action=""
      className='flex items-center gap-3 px-4 w-72 py-1.5 border border-white/10 rounded-lg mb-4'
    >
      <input
        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"
        onChange={(event) => {
          const newSearchParams = new URLSearchParams(searchParams.toString())
          newSearchParams.set('q', event.target.value)
          startTransition(() => {
            router.push(`?${newSearchParams.toString()}`)
          })
        }}
        defaultValue={q ?? ''}
        name="q"
        type='search'
        id='search'
        autoComplete='off'
        placeholder="Search employer..."
      />
      {
        isPending ? (
          <Loader2 className='size-4 animate-spin' />
        ) : (
          searchParams.get('q') ? (
            <button onClick={handleClearInput} >
              <X className='size-4' />
            </button>
          ) : (
            <Search className='size-4 ' />
          )
        )
      }
    </Form>
  )
}

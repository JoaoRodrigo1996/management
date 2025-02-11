import { ComponentProps } from "react";

interface CategoryProps extends ComponentProps<'button'> {
  title: string;
}

export function Category({ title, ...props }: CategoryProps) {
  return (
    <>
      <button 
        className='data-[pending=active]:bg-zinc-800 hover:bg-zinc-900 transition-colors px-4 py-1 text-zinc-300 text-sm font-medium font-sans border border-zinc-800 rounded-md'
        {...props}
      >
        {title}
      </button>
    </>
  )
}

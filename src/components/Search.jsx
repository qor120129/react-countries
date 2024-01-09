import React from 'react'

const Search = () => {
  return (
    <div className='pt-8 pb-6'>
      <label htmlFor="검색"  className="sr-only"></label>
      <input className="w-full focus:ring-2 focus:ring-blue-800 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1  ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..." />
    </div>

  )
}

export default Search
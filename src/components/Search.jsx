
const Search = ({ fetchSearchCountries, changeValue, search, children }) => {

  return (
    <form
      onSubmit={(e) => fetchSearchCountries(e)}
      className='flex items-center py-6 gap-2 flex-wrap'
    >
      <>
        {children}
      </>
      <div className='flex-auto'>
        <label htmlFor="검색" className="sr-only"></label>
        <input
          type="text"
          onChange={(e) => changeValue(e.target.value)}
          value={search}
          className="w-full focus:ring-2 focus:ring-blue-900 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-2 pl-9 ring-1  ring-slate-200 shadow-sm max-[300px]:pl-4"
          aria-label="Filter projects" placeholder="Search Country" />
      </div>
      <button
        type='button'
        onClick={(e) => fetchSearchCountries(e)}
        className='px-4 py-2 font-bold text-blue-900 rounded-lg border hover:bg-blue-900 hover:text-slate-50 transition ease-in'
      >
        검색
      </button>
    </form>
  )
}

export default Search
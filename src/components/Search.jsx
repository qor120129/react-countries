
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
        <label className="sr-only">검색</label>
        <input
          type="text"
          onChange={(e) => changeValue(e.target.value)}
          value={search}
          className="w-full appearance-none text-sm leading-6 rounded-lg py-2 pl-5 max-[300px]:pl-4"
          aria-label="Filter projects" placeholder="Search Country" />
      </div>
      <button
        type='button'
        onClick={(e) => fetchSearchCountries(e)}
        className='px-4 py-2 rounded-lg  dark:hover:text-gray-100 '
      >
        검색
      </button>
    </form>
  )
}

export default Search
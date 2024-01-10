import { useState } from 'react'

const Search = ({ fetchCountries, searchError, formatCountry }) => {
  const [search, setSearch] = useState('')
  const url = `https://restcountries.com/v3.1/translation/`


  const changeValue = (value) => {
    setSearch(value)
  }

  const searchCountries = async (e, search) => {
    e.preventDefault()
    try {
      const response = await fetch(url + search)
      const data = await response.json()
      if (response.status === 200) {
        formatCountry(data)
      }
      else {
        if (!search) {
          fetchCountries()
        } else {
          formatCountry([])
          searchError('정보가 없습니다.')
        }
      }
    } catch (error) {
      formatCountry([])
      searchError(error.message)
      console.error('error.message', error.message)
    }


  }

  return (
    <form
      onSubmit={(e) => searchCountries(e, search)}
      className='flex items-center pt-8 pb-6  gap-2'
    >
      <div className='flex-1'>
        <label htmlFor="검색" className="sr-only"></label>
        <input
          type="text"
          onChange={(e) => changeValue(e.target.value)}
          value={search}
          className="w-full focus:ring-2 focus:ring-blue-800 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-2 pl-10 ring-1  ring-slate-200 shadow-sm" aria-label="Filter projects" placeholder="나라명을 입력하세요" />
      </div>
      <button
        type='button'
        onClick={(e) => searchCountries(e, search)}
        className='px-4 py-2 bg-blue-800 rounded-lg border ring-1 text-slate-50 hover:bg-blue-900 hover:ring-blue-900 transition in-an'
      >
        검색
      </button>
    </form>
  )
}

export default Search
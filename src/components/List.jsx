import React from 'react'
import ListItem from './ListItem'

const List = ({ countries, displayedCountries, errorMsg, filterCountries }) => {
  console.log(errorMsg)
  return (
    <div className='min-h-[40rem] rounded-lg'>
      {
        displayedCountries.length > 0
          ? (
            <ul className="divide-y divide-slate-100 max-w-5xl m-auto">
              {displayedCountries.map((item, index) =>
                (<ListItem key={index} countries={item}></ListItem>)
              )}
            </ul>
          ) : (
            <h2 className='font-medium text-xl text-slate-700 text-center p-4 flex justify-center items-center h-full capitalize '>{errorMsg}</h2>
          )
      }
      <div className='text-center my-8'>
        <button
          onClick={() => filterCountries(countries, displayedCountries)}
          className="text-base font-[Oswald] text-slate-800 py-2 px-10 rounded-lg border hover:bg-blue-950  hover:text-slate-50 transition ease-in"
        >
          More
        </button>
      </div>

    </div>
  )
}

export default List
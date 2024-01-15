import React from 'react'
import ListItem from './ListItem'

const List = ({ countries, displayedCountries, errorMsg, filterCountries, }) => {
  return (
    <div className='min-h-[34rem] rounded-lg'>
      {displayedCountries.length > 0
        ? (
          <ul className="divide-y divide-gray-100 max-w-5xl m-auto dark:divide-[#2e3031]">
            {displayedCountries.map((item, index) =>
              (<ListItem key={index} countries={item}></ListItem>)
            )}
          </ul>
        ) : (
          <h2 className='font-medium text-xl text-gray-700 text-center p-4 flex justify-center items-center h-full capitalize dark:text-gray-100'>{errorMsg}</h2>
        )
      }
      {(displayedCountries.length < countries.length) && countries.length > 25 && displayedCountries.length >= 25 &&
        <div className='text-center my-8'>
          <button
            onClick={() => filterCountries(countries, displayedCountries)}
            className="text-base font-[Oswald] py-2 px-10 rounded-lg transition ease-in hover:ring-blue-950 dark:bg-[#202124] dark:ring-gray-50 dark:hover:bg-[#28292c]"

          >
            More
          </button>
        </div>}
    </div>
  )
}

export default List
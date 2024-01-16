
const List = ({ countries, displayedCountries, errorMsg, filterCountries, children, activePageView }) => {
  return (
    <div className='min-h-[34rem] rounded-lg'>
      {displayedCountries.length > 0
        ? (
          <ul className={`${activePageView
            ?
            'divide-y divide-gray-100 max-w-5xl m-auto dark:divide-[#2e3031]'
            :
            'grid grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] gap-6 pb-6 '}`}
          >
            {children}
          </ul>
        ) : (
          <h2 className='font-medium text-xl text-gray-700 text-center p-4 flex justify-center items-center h-full capitalize dark:text-gray-100'>{errorMsg}</h2>
        )
      }
      {
        (displayedCountries.length < countries.length) && countries.length > 25 && displayedCountries.length >= 25 &&
        <div className='text-center my-8'>
          <button
            onClick={() => filterCountries(countries, displayedCountries)}
            className="text-base font-[Oswald] py-2 px-10 rounded-lg transition ease-in "
          >
            More
          </button>
        </div>
      }
    </div >
  )
}

export default List
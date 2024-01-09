import { useEffect, useState } from 'react'

const ListItem = ({ countries }) => {
  const [Country, setCountry] = useState([])

  useEffect(() => {
    formattedCountry(countries)
  }, [])



  function formattedCountry(countries) {
    const { name, capital, area, continents, languages, flags, population, translations, currencies } = countries

    const formatCountry = {
      name: name.common,
      capital: capital[0] || '',
      area,
      continents: continents[0],
      languages: formatLanguages(languages),
      imgUrl: flags.png,
      population,
      koName: translations.kor.common,
      currencies: formatCurrencies(currencies),
    }
    setCountry(formatCountry)
    // console.log('formattedCountry', formatCountry)
  }

  const formatLanguages = (languages) => {
    return Object.values(languages)
  }

  const formatCurrencies = (currencies) => {
    const filterCurrencies = Object.values(currencies)
    return filterCurrencies[0].symbol
  }
  const text = Country?.continents?.replace(" ", "")

  return (
    <article
      className="flex items-center space-x-6 p-6 cursor-pointer hover:bg-slate-50 transition-all">
      <img
        src={Country.imgUrl}
        alt={`${Country.name} flag png'`}
        width="100%"
        height="100%"
        className="max-w-40 w-auto h-auto border" />
      <div className="min-w-0 flex flex-col gap-2 flex-auto">
        <div className="flex items-center gap-2 flex-wrap text-slate-800">
          <h2 className="font-bold truncate "> {Country.name} </h2>
          <span className=" text-sm font-medium opacity-70 truncate">({Country.koName})</span>
        </div>
        <dl className="flex flex-wrap text-sm leading-6 font-medium">
          <div className='flex gap-1'>
            <dt className="capitalize font-bold">대륙 &#58;</dt>
            <dd className='font-medium flex items-center'>
              {Country.continents}
              <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                <circle cx="1" cy="1" r="1" />
              </svg>
            </dd>
          </div>
          <div className='flex gap-1'>
            <dt className="capitalize font-bold">수도 &#58;	</dt>
            <dd className="font-medium flex items-center">
              {Country.capital}
              <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                <circle cx="1" cy="1" r="1" />
              </svg>
            </dd>
          </div>
          <div className='flex gap-1'>
            <dt className="capitalize font-bold">인구 &#58;	</dt>
            <dd className="font-medium flex items-center">
              {Country.population}명
            </dd>
          </div>
          <div className="flex gap-1 w-full trunca">
            <dt className="capitalize font-bold">언어 &#58;	</dt>
            {Country?.languages?.map((item, index) => (
              <dd className="text-slate-400 flex gap-2 truncate  *:last:*:last:hidden">
                <span>{item}
                  <span>,</span>
                </span>
              </dd>
            )
            )}
          </div>
        </dl>
        {/* <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
      <div className="absolute top-0 right-0 flex items-center space-x-1">
        <dt className="">
          <span className="capitalize font-bold">continents</span>
          <dd className={`w-20 text-center px-1.5 ring-1 ring-slate-200 rounded text-${text}`}>{Country.continents}</dd>
        </dt>
        <dd>{Country.starRating}</dd>
      </div>
      <div className='flex gap-2'>
        <dt className=" text-slate-400">capital &#58;	</dt>
        <dd className="text-slate-900">{Country.capital}</dd>
      </div>
      <div className="ml-2">
        <dt className="capitalize font-bold">area</dt>
        <dd>{Country.area}</dd>
      </div>
      <div>
        <dt className="capitalize font-bold">continents</dt>
        <dd className="flex items-center">
          <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
          </svg>
          {Country.continents}
        </dd>
      </div>
      <div>
        <dt className="capitalize font-bold">languages</dt>
        <dd className="flex items-center">
          <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
          </svg>
          {Country.languages}
        </dd>
      </div>
      <div className="flex-none w-full mt-2 font-normal">
        <dt className="capitalize font-bold">population</dt>
        <dd className="text-slate-400">{Country.population}</dd>
      </div>
      <div className="flex-none w-full mt-2 font-normal">
        <dt className="capitalize font-bold">currencies</dt>
        <dd className="text-slate-400">{Country.currencies}</dd>
      </div>
    </dl> */}
      </div>
    </article>
  )
}

export default ListItem
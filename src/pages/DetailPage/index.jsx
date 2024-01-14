import React from 'react'
import { Link, useLocation } from "react-router-dom";


const DetailPage = () => {
  const { state: { countries } } = useLocation()

  return (
    <div className="min-h-[calc(100vh-150px)] bg-gray-50">
      <div className="max-w-3xl m-auto p-12 max-[500px]:p-6 relative">
        <div className='flex items-center gap-3 mb-4 -mt-8'>
          <Link to="/" className='hover:bg-gray-200 p-2 rounded-lg transition ease-in delay-100'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </Link>
        </div>
        <div className="max m-auto border">
          <img
            src={countries.flagImg}
            alt={countries.flagAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* info */}
        <div className="max-[500px]:px-4 p-8 pb-0  max-m-auto">
          <div className="flex items-center gap-x-2 flex-wrap mb-6">
            <h1 className="font-bold text-2xl">{countries.name}</h1>
            <h2 className="text-xl ">{countries.koName}</h2>
          </div>

          {/* Options */}
          <div className='flex flex-col gap-y-1'>

            <div className="flex-base ">
              <span className="font-medium">대륙 &#58; </span>
              <span className="">{countries.continents}</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">수도 &#58; </span>
              <span className="">{countries.capital}</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">면적 &#58; </span>
              <span className="">{countries.area}(km&#178;)</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">인구 &#58; </span>
              <span className="">{countries.population}명</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">통화 &#58; </span>
              <span className="">
                <span>{countries.currencies.name} </span>
                <span>( {countries.currencies.symbol} )</span>
              </span>
            </div>
            <div className="flex-base">
              <span className="font-medium">언어 &#58;</span>
              {countries.languages.map((item) => (
                <div key={item} className=" *:last:*:last:hidden truncate">
                  <span className="">{item}
                    <span>,&nbsp;</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-base mt-6">
            <span className="font-medium">지도 &#58; </span>
            <Link className='hover:underline break-all ' to={countries.maps}>{countries.maps}</Link>
          </div>
        </div>
      </div>
    </div >
  )
}


export default DetailPage

import React from 'react'
import { Link, useLocation } from "react-router-dom";


const DetailPage = () => {
  const { state: { countries } } = useLocation()

  return (
    <div className="min-h-[calc(100vh-118px)] bg-gray-50 dark:bg-[#28292c]">
      <div
        className="max-w-5xl m-auto p-6 pt-12 flex  flex-wrap justify-center gap-6 items-center max-[900px]:flex-col max-[900px]:gap-0 max-[500px]:pt-6"
      >
        <div className="border dark:border-0 flex-1 max-w-[400px]">
          <img
            src={countries.flagImg}
            alt={countries.flagAlt}
            className="h-auto w-full object-cover object-center"
          />
        </div>
        <div className="p-4 max-lg:max-w-[400px]">
          <div className="flex items-center gap-x-2 gap-y-1 flex-wrap mb-6">
            <h1 className="font-bold text-2xl max-[500px]:text-lg">{countries.name}</h1>
            <h2 className="text-lg max-[500px]:text-base">{countries.koName}</h2>
          </div>

          {/* Options */}
          <div className='flex flex-col gap-y-1 text-base max-[500px]:text-sm dark:text-gray-100/90'>
            <div className="flex-base">
              <span className="font-medium">대륙 &#58; </span>
              <span>{countries.continents}</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">수도 &#58; </span>
              <span>{countries.capital}</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">면적 &#58; </span>
              <span>{countries.area}(km&#178;)</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">인구 &#58; </span>
              <span>{countries.population}명</span>
            </div>
            <div className="flex-base">
              <span className="font-medium">통화 &#58; </span>
              <span>
                <span>{countries.currencies.name} </span>
                <span>( {countries.currencies.symbol} )</span>
              </span>
            </div>
            <div className="flex-base">
              <span className="font-medium">언어 &#58;</span>
              {countries.languages.map((item) => (
                <div key={item} className=" *:last:*:last:hidden truncate">
                  <span>{item}
                    <span>,&nbsp;</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="flex-base">
              <span className="font-medium">지도 &#58; </span>
              <Link className='hover:underline break-all ' to={countries.maps} target="_blank">{countries.maps}</Link>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}


export default DetailPage

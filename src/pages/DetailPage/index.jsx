import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Loading from 'components/Loading';
import NotFound from 'components/NotFound';


const DetailPage = () => {
  const { state } = useLocation()
  return (
    <>
      {state?.loading && (<Loading className={'w-20'} />)}
      {!state?.countries && (<NotFound />)}
      {state?.countries && (<div className="min-h-[calc(100vh-118px)] bg-gray-50 dark:bg-[#28292c]">
        <div
          className="max-w-5xl m-auto p-6 pt-12 flex  flex-wrap justify-center gap-6 items-center max-[900px]:flex-col max-[400px]:gap-1 max-[500px]:pt-6"
        >
          <div className="border dark:border-0 flex-1  max-w-[400px]">
            <img
              src={state.countries?.flagImg}
              alt={state.countries?.flagAlt}
              className="h-auto w-full object-cover object-center"
            />
          </div>
          <div className="p-4 flex-1 max-lg:max-w-[400px]">
            <div className="flex items-center gap-x-2 gap-y-1 flex-wrap mb-6">
              <h1 className="font-bold text-2xl max-[400px]:text-lg">{state.countries?.name}</h1>
              <h2 className="text-lg max-[400px]:text-base">{state.countries?.koName}</h2>
            </div>

            {/* Options */}
            <div className='flex flex-col gap-y-1 text-base max-[400px]:text-sm dark:text-gray-100/90'>
              <div className="flex-base">
                <span className="font-medium">대륙 &#58; </span>
                <span>{state.countries?.continents}</span>
              </div>
              <div className="flex-base">
                <span className="font-medium">수도 &#58; </span>
                <span>{state.countries?.capital}</span>
              </div>
              <div className="flex-base">
                <span className="font-medium">면적 &#58; </span>
                <span>{state.countries?.area}(km&#178;)</span>
              </div>
              <div className="flex-base">
                <span className="font-medium">인구 &#58; </span>
                <span>{state.countries?.population}명</span>
              </div>
              <div className="flex-base">
                <span className="font-medium">통화 &#58; </span>
                <span>
                  <span>{state.countries?.currencies.name} </span>
                  <span>( {state.countries?.currencies.symbol} )</span>
                </span>
              </div>
              <div className="flex-base">
                <span className="font-medium">언어 &#58;</span>
                {state.countries?.languages.map((item) => (
                  <div key={item} className=" *:last:*:last:hidden truncate">
                    <span>{item}
                      <span>,&nbsp;</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex-base">
                <span className="font-medium">지도 &#58; </span>
                <Link className='hover:underline break-all ' to={state.countries?.maps} target="_blank">{state.countries?.maps}</Link>
              </div>
            </div>

          </div>
        </div>
      </div >)}

    </>
  )
}


export default DetailPage

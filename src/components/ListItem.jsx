import { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link, useNavigate } from 'react-router-dom'

const ListItem = ({ countries }) => {
  const [loading, setLoading] = useState(false)
  const detailPage = countries?.name.replace(/ /g, "")
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${detailPage}`, {
    state: { countries }
  })

  return (
    <article
      onClick={() => handleClick()}
      className="flex items-center min-[501px]:space-x-6 p-6 cursor-pointer hover:bg-slate-50 transition-all max-[500px]:flex-wrap max-[500px]:p-4  max-[500px]:pt-8  max-[500px]:first:pt-4"
    >
      <div className="relative max-w-40 w-full h-auto border max-[500px]:max-w-full"
      >
        {loading && (
          <Loading className={`w-10`} />
        )}
        <img
          src={countries.flagImg}
          alt={countries.flagAlt}
          width="100%"
          height="100%"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="min-w-0 flex flex-col gap-2 flex-auto max-[500px]:p-4">
        <div className="flex items-center gap-x-2 flex-wrap ">
          <h2 className="font-bold truncate "> {countries.name} </h2>
          <span className=" text-sm font-medium opacity-70 truncate">({countries.koName})</span>
        </div>
        <dl className="flex flex-wrap text-sm leading-6 gap-x-4">
          <div className='flex gap-1'>
            <dt className="capitalize font-medium">대륙 &#58;</dt>
            <dd className='flex items-center'>
              {countries.continents}
            </dd>
          </div>
          <div className='flex gap-1'>
            <dt className="capitalize font-medium">수도 &#58;	</dt>
            <dd className="flex items-center">
              {countries.capital}
            </dd>
          </div>
          <div className='flex gap-1'>
            <dt className="capitalize font-medium">인구 &#58;	</dt>
            <dd className="flex items-center">
              {countries.population}명
            </dd>
          </div>
          <div className="flex items-center gap-1 w-full truncate">
            <dt className="capitalize font-medium">언어 &#58;	</dt>
            <dd className="*:last:*:last:hidden truncate">
              {countries?.languages?.map((item, index) => (
                <span key={index}>{item}
                  <span>,&nbsp;</span>
                </span>
              )
              )}
            </dd>
          </div>
        </dl>
      </div>
    </article>

  )
}

export default ListItem
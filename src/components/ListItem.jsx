import { useState } from 'react'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

const ListItem = ({ countries, activePageView }) => {
  const [loading, setLoading] = useState(true)
  const detailPage = countries?.name.replace(/ /g, "")
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${detailPage}`, { state: { countries, loading } })

  return (
    <article
      onClick={() => handleClick()}
      className={`${activePageView
        ?
        'items-center min-[501px]:space-x-6 max-[500px]:flex-wrap max-[500px]:p-4 max-[500px]:pt-8 max-[500px]:first:pt-4 p-6 hover:bg-[#f3f4f6] dark:hover:bg-[#28292c]'
        :
        'ring-1 ring-[#e5e7eb] flex-col rounded-lg overflow-hidden relative before:block before:absolute before:-inset-1 z-0 before:z-0 hover:before:bg-[#202124]/10 dark:ring-[#343638] dark:hover:before:bg-gray-100/10 '
        } 
      flex cursor-pointer`
      }
    >
      <div
        className={`${activePageView
          ?
          'relative max-w-40 w-full h-auto border max-[500px]:max-w-full'
          :
          'border-b'
          } 
          dark:border-0`
        }
      >
        {loading && (
          <Loading className={`w-10`} />
        )}
        <img
          className={`${activePageView ? '' : ' rounded-t-lg'}`}
          src={countries.flagImg}
          alt={countries.flagAlt}
          width="100%"
          height="100%"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div
        className={`${activePageView
          ?
          'min-w-0 flex flex-col gap-2 flex-auto max-[500px]:p-4'
          :
          'p-4 z-[1] flex-1'
          } 
        `
        }
      >
        <div className="flex items-center gap-x-2 flex-wrap ">
          <h2 className="font-bold truncate "> {countries.name} </h2>
          <span className=" text-sm font-medium truncate">({countries.koName})</span>
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
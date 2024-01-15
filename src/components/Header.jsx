import React from 'react'
import myIcon from 'assets/myIcon.png'
import { Link, useLocation } from 'react-router-dom'
import SwitchToggle from 'components/SwitchToggle'

const Header = () => {
  const { pathname, state } = useLocation();

  const toggleTheme = () => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;

    const enabledDarkMode = htmlEl.classList.contains('dark');
    if (enabledDarkMode) {
      htmlEl.classList.remove('dark');
    } else {
      htmlEl.classList.add('dark');
    }
  }

  return (
    <header className='shadow-sm drop-shadow-sm z-100'>
      <div className='flex items-center justify-between p-4 h-16 w-full m-auto max-w-5xl box-border '>
        <Link to="/"  className='truncate'>
          {pathname === '/' ?
            <div className='flex items-center justify-center'>
              <h1 className='font-[Oswald] text-2xl text-blue-900 dark:text-gray-100'>Restcountries</h1>
              <h2 className='font-[Oswald] text-2xl text-gray-900 dark:text-blue-900'>.com</h2>
            </div>
            :
            <div className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
              <div className='text-sm font-bold truncate'>
                {state?.countries?.name}
              </div>
            </div>

          }
        </Link>
        <div className='flex gap-3 items-center'>
          <SwitchToggle toggleTheme={toggleTheme} />
          {/* <Link className=' bg-gray-200 p-2 rounded-full'>
            <img className='w-6' src={myIcon} alt="myIcon.png" />
          </Link > */}
        </div>
      </div>
    </header >
  )
}

export default Header
import React from 'react'
import myIcon from 'assets/myIcon.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border'>
      <div className='flex items-center justify-between px-4 h-16 w-full m-auto max-w-5xl'>
        <Link to="/" className='font-[Oswald] text-2xl'>
          <span className='text-blue-800'>Restcountries</span>
          {/* <span>.com</span> */}
        </Link>
        <Link className=' bg-gray-200 p-2 rounded-full'>
          <img className='w-6' src={myIcon} alt="myIcon.png" />
        </Link >
      </div>
    </header>
  )
}

export default Header
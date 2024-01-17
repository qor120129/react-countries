import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='border-t w-full flex items-center justify-center dark:border-t-[#28292c]'>
      <Link to="/" className='font-[Oswald] text-sm  py-4 w-32 text-center'>
        <span className='text-blue-900/80 dark:text-white/80'>Restcountries</span>
        <span className='dark:text-blue-900/80'>.com</span>
      </Link>
    </footer>
  )
}

export default Footer
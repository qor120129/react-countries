import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='border-t w-full py-4 flex items-center justify-center'>
      <Link to="/" className='font-[Oswald] text-sm  opacity-30 py-4 w-32 text-center'>
        <span className='text-blue-900'>Restcountries</span>
        <span>.com</span>
      </Link>
    </div>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='border-t w-full py-4'>
      <Link to="/" className='font-[Oswald] text-sm flex items-center justify-center opacity-30 py-4'>
        <span className='text-blue-800'>Restcountries</span>
        <span>.com</span>
      </Link>
    </div>
  )
}

export default Footer
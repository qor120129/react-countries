import React from 'react'

const ScrollToTop = ({ scrollToTop }) => {
  return (
    <button
      onClick={() => scrollToTop()}
      className=' fixed bottom-6 right-4 p-2 rounded-lg  cursor-pointer dark:ring-[#515254]
      '
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
      </svg>
    </button>
  )
}

export default ScrollToTop 
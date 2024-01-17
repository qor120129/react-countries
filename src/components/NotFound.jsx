import React from 'react'

const NotFound  = () => {
  return (
    <div className=" text-center flex flex-col items-center justify-center h-[87vh]">
      <h1 className="text-9xl font-[Oswald] leading-tight">404</h1>
      <div className="text-5xl font-bold">Page Not Found!</div>
      <a
        href="/"
        className="rounded-md text-blue-900 border px-3.5 py-2.5 text-sm font-bold
      shadow-sm hover:border-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 mt-20 dark:text-gray-100 dark:hover:bg-[#343638] dark:border-[#343638]"
      >
        ← Back to home
      </a>
    </div>
  )
}

export default NotFound 
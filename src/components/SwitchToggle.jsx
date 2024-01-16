import { useState } from 'react'
import { Switch } from '@headlessui/react'

const SwitchToggle = ({ toggleTheme }) => {
  const [enabled, setEnabled] = useState(true)

  return (
    <Switch
      onClick={() => toggleTheme()}
      checked={enabled}
      onChange={setEnabled}
      className={`
      relative h-[35px] w-[65px] max-[400px]:w-[25px] max-[400px]:h-[25px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ring-0 text-white bg-[#202124] hover:bg-[#404345] dark:bg-gray-100  dark:hover:bg-gray-200 dark:text-[#2e3031] *:
      max-[400px]:*:hover:bg-[#404345] dark:max-[400px]:*:hover:bg-gray-200
      `}

    >
            
      {enabled
        ?
        <>
          <div
            aria-hidden="true"
            className={'translate-x-1 max-[400px]:translate-x-0 pointer-events-none h-[25px] w-[25px] transform rounded-full bg-white ring-0 transition duration-200 ease-in-out flex items-center justify-center shadow-md  shadow-black text-[#2e3031] max-[400px]:bg-[#2e3031] max-[400px]:text-white'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </div>
          <span className='text-[10px]  font-medium absolute top-1/2 right-3 -translate-y-1/2 z-10 max-[400px]:hidden'>Dark</span>
        </>
        :
        <>
          <div
            aria-hidden="true"
            className={'translate-x-9 max-[400px]:translate-x-0  pointer-events-none h-[25px] w-[25px] transform rounded-full bg-white transition duration-200 ease-in-out flex items-center justify-center drop-shadow-md     '}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </div>
          <span className='text-[10px] font-medium absolute top-1/2 left-2.5 -translate-y-1/2 max-[400px]:hidden'>Light</span>
        </>
      }
    </Switch >
  )
}
export default SwitchToggle
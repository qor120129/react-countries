import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SelectMenu = ({ selectContinent, continent, changeSelect }) => {
  return (
    <Listbox
      value={selectContinent}
      onChange={(value) => changeSelect(value)}
    >
      {({ open }) => (
        <>
          <div className="relative max-[500px]:w-full">
            <Listbox.Button
              className="relative w-52 cursor-default rounded-lg py-2 pl-5 pr-10 text-left sm:text-sm sm:leading-6 max-[500px]:w-full
              "
            >
              <span className="flex items-center">
                <span className="block truncate">{selectContinent}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-[#2e3031] dark:text-white" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 max-h-auto w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg  ring-black ring-opacity-5 sm:text-sm
                dark:bg-[#28292c]"
              >
                {continent.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-blue-900 text-white dark:bg-black/30' : ' dark:text-white/80',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold text-wthie dark:text-white' : 'font-normal', 'ml-3 block truncate')}>
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white ' : 'text-blue-900 ',
                              'absolute inset-y-0 right-0 flex items-center pr-4  dark:text-white'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
export default SelectMenu
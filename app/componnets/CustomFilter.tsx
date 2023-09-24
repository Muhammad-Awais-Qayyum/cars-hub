'use client'
import React, { useState,Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Listbox,Transition } from '@headlessui/react'
import Image from 'next/image'
import { Router } from 'next/router'
import { updateSearchParams } from '../utils'

interface OptionProps{
  title:string,
  value:string
}
interface CustomFilterProps{
 title:string,
 options:OptionProps[];
 setFilter:any
  
}
type Props = {}

const CustomFilter: React.FC<CustomFilterProps>=({
  title,options,setFilter
})=>{
  
  const [select,setSelect]=useState(options[0])

  return (
    <div className=' w-fit'>

      <Listbox
      value={select}
      onChange={(e)=>{setSelect(e);
      setFilter(e.value);}}
      >
        <div className=' relative w-fit z-10'>
        <Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border'>
       <span className=' block truncate'>{select.title}</span>
       <Image src='/chevron-up-down.svg' width={20} height={20} className=' ml-4 object-contain' alt='chevron up down'/>
        </Listbox.Button>
        <Transition
        as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
           {options.map((option)=>(
            <Listbox.Option key={option.title} value={option}
            className={({active}) =>` relative  cursor-default  select-none  py-2
              px-4 ${
                active ? 'bg-primary-blue text-white':'  text-gray-900'
              }`}
            >
               {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.title}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            {/* Add your selected indicator here */}
                          </span>
                        ) : null}
                      </>
                  )}
            </Listbox.Option>
           ))}
          </Listbox.Options>


        </Transition>
        </div>
      </Listbox>


    </div>
  )
}

export default CustomFilter;
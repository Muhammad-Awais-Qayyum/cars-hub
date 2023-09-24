import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "../constant";
import Image from "next/image";

interface SearchManufactuerProps {
  selected:string,
  setSelected:(manufacturer: string) => void;

}

const SearchManufactuer: React.FC<SearchManufactuerProps> = ({
  selected,setSelected
}) => {
  const [query, setQuery] = useState("");

  const filterManufacturers = query === "" ? manufacturers : manufacturers.filter((item)=>(
    item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
  )) 
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              height={20}
              width={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Volkswagen"
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            displayValue={(manu: string) => manu}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filterManufacturers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filterManufacturers.map((item)=>(
                  <Combobox.Option key={item} value={item} className={({active})=>`
                    relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-blue text-white':' text-gray-900'}`} >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
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
                  </Combobox.Option>
                )))} 
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    );
};

export default SearchManufactuer;

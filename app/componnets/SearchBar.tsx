import React, { useState } from "react";
import Searchmanufacturer from './SearchManufactuer' // Corrected import name
import toast from 'react-hot-toast';
import Image from "next/image";

type SearchBarProps = {
  setmanufacturer: (manufacturer: string) => void;
  setmodel: (model: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ setmanufacturer, setmodel }) => {
  

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image src='/magnifying-glass.svg' alt="magnifying glass" className="object-contain" height={40} width={40} />
    </button>
  );

  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      toast.error("Please provide some input"); // Use toast for displaying errors
      return;
    }

    setmodel(searchModel);
    setmanufacturer(searchManufacturer);
   
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Searchmanufacturer selected={searchManufacturer} setSelected={setSearchManufacturer} />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image src='/model-icon.png' alt="Searchmodel icon" height={25} width={25}
          className="absolute w-[20px] h-[20px] ml-4" />
        <input
          type="text"
          name="Searchmodel"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;

"use client"
import Hero from "@/app/componnets/Hero";
import SearchBar from "./componnets/SearchBar";
import CustomFilter from "./componnets/CustomFilter";
import { fetchCars } from "./utils";
import CarCard from "./componnets/CarCard";
import { fuels, yearsOfProduction } from "./constant";
import ShowMore from "./componnets/ShowMore";
import { useEffect, useState } from "react";
import Image from "next/image";


export default  function  Home() {
const [allcars,setAllCars]=useState([])
const [loading,setLoading]=useState(false)
const [model, setModel] = useState('')
const [manufacturer, setManufacturer] = useState('')
const [fuel,setFuel]=useState('')
const [year, setYear] = useState(2022)
const [limit, setlimit] = useState(10)

const getCars=async()=>{
  setLoading(true);
  try {
    const result= await fetchCars({
      manufacturer: manufacturer || "",
      year: year || 2022,
      fuel: fuel || "",
      limit: limit || 10,
      model: model || "",});
      setAllCars(result);
  } catch (error) {
    console.log(error)
  }finally{
setLoading(false)
  }
}
useEffect(()=>{
getCars();
},[year,manufacturer,limit,model,fuel])
 
  return (
    <main className=" overflow-hidden">
      <Hero/>
      <div className="  mt-12 sm:px-16 px-6 py-4  max-w-[1440px] mx-auto" id="discover" >
        <div className=" flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className=" text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
         
        </div>
        <div className="mt-12 w-full flex justify-between  items-center flex-wrap gap-5">
             <SearchBar setmanufacturer={setManufacturer} setmodel={setModel}/>
             <div className="flex justify-start flex-wrap items-center gap-2">
             <CustomFilter title='fuel' options={fuels} setFilter={setFuel}/>
             <CustomFilter   title='year' options={yearsOfProduction} setFilter={setYear}/>
             </div>
        </div>
        {allcars.length > 0 ?(
          <section>
           <div className=" grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
               {allcars?.map((car , index) => (
               <CarCard key={index} car={car}/>)
               )} 
           </div>
           {loading &&(
            <div className=" mt-16 flex flex-center justify-center w-full">
              <Image src='/loader.svg' alt="loader" width={50} height={50} className=" object-contain"/>
            </div>
           )}
           <ShowMore  pageNumber={limit / 10}
           isNext={limit > allcars.length} setlimit={setlimit}
           />
          </section>
        ):(
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className=" text-xl text-black font-bold">Oops, no results </h2>
            
          </div>
        )}
      </div>
    </main>
  )
}

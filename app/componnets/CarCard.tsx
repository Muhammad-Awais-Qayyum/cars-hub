"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImage } from "../utils";
import Image from "next/image";
import CarDetail from "./CarDetail";

interface CarCardProps {
  car: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const {
    city_mpg,
    class: car_class,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const rentalRate = calculateCarRent(city_mpg, year);
const [open,setIsOpen]=useState(false)
  return (
    <div className=" group  flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make}
          {model}
        </h2>
      </div>

      <p className=" flex mt-6 text-[32px] font-extrabold">
        <span className=" self-start text-[14px]  font-semibold">$</span>
        {rentalRate}
        <span className=" self-end text-[14px]  font-medium">/day</span>
      </p>

      <div className=" relative  w-full  h-40 my-3 object-contain">
        <Image
          src={generateCarImage(car)}
          alt="car model"
          fill
          priority
          className=" object-contain"
        />
      </div>

      <div className=" relative flex  w-full  mt-2">
        <div className="  flex  group-hover:invisible w-full  justify-between  text-gray">
          <div className=" flex flex-col  justify-center items-center">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className=" text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className=" flex flex-col  justify-center items-center">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className=" text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col  justify-center items-center">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className=" text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>

        <div className="  hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton title="View More" containerStyles=" w-full py-[16px] rounded-full bg-primary-blue"
          textStyle=" text-white text-[14px] leading-[17px] font-bold"
          rightIcon='/right-arrow.svg'
          handleClick={()=>setIsOpen(true)}
        />
        </div>
      </div>
      <CarDetail open={open} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;

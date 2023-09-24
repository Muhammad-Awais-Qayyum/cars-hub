'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from './CustomButton';
import { updateSearchParams } from '../utils';

interface ShowMoreProps{
    pageNumber:number;
    isNext:boolean
    setlimit:any
}

type Props = {}

const ShowMore:React.FC<ShowMoreProps>=({
    pageNumber,isNext,setlimit
})=>{
   
    const handleMore=()=>{
        const newLimit=(pageNumber + 1) * 10;
     setlimit(newLimit);
    }
  return (
    <div className="w-full  justify-center flex flex-center gap-5 mt-10">
    {!isNext && (
      <CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleMore}
      />
    )}
  </div>
  )
}

export default ShowMore;
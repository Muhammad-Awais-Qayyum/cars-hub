'use client'
import Image from 'next/image';
import React, { MouseEventHandler } from 'react'

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | 'submit';
  textStyle?:string;
  rightIcon?:string
  isDisabled?:boolean;
}



const CustomButton: React.FC<CustomButtonProps> = ({
  title, containerStyles, handleClick, btnType,textStyle,rightIcon,isDisabled 
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon &&(
        <div className=' relative h-6 w-6'>
       <Image src={rightIcon} alt='right icon' fill className=' object-contain'/>
        </div>
      )}
    </button>
  )
}

export default CustomButton;
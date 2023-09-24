import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
type Props = {};

function Navbar({}: Props) {
  return (
    <header className=" absolute w-full z-10">
      <nav className=" max-w-[1440px] mx-auto justify-between flex  items-center px-6 sm:px-16 py-4">
        <Link href="/" className=" justify-center  items-center flex">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          />
        </Link>
        <CustomButton btnType="button" title="Sign In" containerStyles=" text-primary-blue  rounded-full bg-white min-w-[130px]" />
      </nav>
    </header>
  );
}

export default Navbar;

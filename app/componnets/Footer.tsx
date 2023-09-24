import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constant";

function Footer() {
  return (
    <footer className="text-black-100 flex flex-col mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 py-10 px-6 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            height={18}
            width={118}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{section.title}</h3>
              {section.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>
        <div className=" flex  items-center  border-t border-r-gray-100 flex-wrap justify-between  py-10 px-6 sm:px-16 ">
             <p>@2023 Carhub. All Rights Reserved</p>
             <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                <Link href='/' className=" text-gray-500">Privacy Policy</Link>
                <Link href='/' className=" text-gray-500">Terms of use</Link>
             </div>
        </div>
     
    </footer>
  );
}

export default Footer;

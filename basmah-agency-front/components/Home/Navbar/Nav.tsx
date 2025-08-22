import React from "react";
import { IoFingerPrintOutline } from 'react-icons/io5';
import Link  from "next/link";
import { navLinks } from "../../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

// This is the main page for basmah-agency app

type NavProp = {
  openNav: () => void;
};
const Nav = ({openNav}:NavProp) => {
  return (
  <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
    <div className="flex items-center f-full justify-between w-[90%] x1:w-[80%] mx-auto">
      {/* LOGO */}
      <div className="flex items-center space-x-2 ">
        <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center flex-col">
          <IoFingerPrintOutline className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-x1 hidden sm:block md:text-2xl text-blue-800">Basmah Agency</h1>
      </div>
      {/* Navlinks */}
      <div className="hidden items-center lg:flex space-x-10">
        {navLinks.map((link)=>{
          return (
            <Link 
            href={link.url} 
            key={link.id} 
            className="text-black hover:text-rose-500 font-semibold transition-all duration-200" >
            <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
      {/*Button */}
      <div className="flex items-center h-[12vh] space-x-4 ">
        <div className="relative">
    <div className="absolute -inset-5">
        <div
            className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
        </div>
    </div>
    <a href="#" title=""
        className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">
        Creat Account
    </a>
    </div>
    {/* burger menu */}
    <HiBars3BottomRight onClick={openNav} className="w-8 cursor-pointer text-black lg:hidden" />
    </div>
    </div>
    </div>
  )
};

export default Nav;
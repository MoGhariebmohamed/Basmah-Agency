import React from "react";
import Link  from "next/link";
import { navLinks } from "../../../constant/constant";
import { CgClose } from "react-icons/cg";

// This is the main page for basmah-agency app
type NavProp ={
  showNav: boolean;
  closeNav: () => void;
};

const PhoneNav = ({closeNav, showNav}:NavProp) => {
  const navOpen = showNav?'translate-x-0':'translate-x-[-100%]'
  return <div>
    {/* OveLay */}
    <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black 
    opacity-70 w-full h-screen`}>
    </div>

    {/* Navlinks */}
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all
    duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-800 space-y-6 z-[1050]`}>
      {navLinks.map((link)=>{
        return (
        <Link key={link.id} href={link.url}>
          <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white
          sm-text-[30px]">{link.label}</p>
        </Link>
        );
      })}
      {/* close window icon */}
      <CgClose
       onClick={closeNav}
      className="absolute top-[0.7rem] sm:h-8 w-6 h-6"/>
    </div>
    </div>;
};

export default PhoneNav;
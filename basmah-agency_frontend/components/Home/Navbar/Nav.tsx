"use client";
import React, { useEffect, useState } from "react";
import { IoFingerPrintOutline } from 'react-icons/io5';
import Link  from "next/link";
import { navLinks } from "../../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

// This is the main page for basmah-agency app

type NavProp = {
  openNav: () => void;
};
const Nav = ({ openNav }: NavProp) => {
  const [navbg, setNavbg] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  

    useEffect(() => {
        const handler = () => {
          if(window.scrollY >= 90) setNavbg(true);
          if(window.scrollY < 90) setNavbg(false);
        };
        window.addEventListener("scroll", handler);

        {/* activate active section */}
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting){
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.5 }
        );
        sections.forEach((sec) => observer.observe(sec));

        return() => {
          window.removeEventListener("scroll", handler);
          sections.forEach((sec) => observer.unobserve(sec));
        };
    },[]);

  return (
  <div className={`transition-all 
    ${navbg? "bg-[#006f82] shadow-md" : "bg-transparent"
    } duration-300 h-[11vh] z-[100] fixed w-full`}
  >
    <div className="flex items-center justify-between
     w-[90%] xl:w-[80%] mx-auto mt-2">
      {/* Navlinks */}
      <div className="hidden items-center lg:flex space-x-10">
        {navLinks.slice().reverse().map((link) => {
          const sectionName = link.url.replace("#", "");
          return (
            <Link 
            href={link.url} 
            key={link.id} 
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById(sectionName);
              if (target) {
                target.scrollIntoView ({ behavior: "smooth" });
                window.history.pushState(null, "", `#${sectionName}`);
              }
            }}
            className={`font-semibold transition-all duration-200 
          ${activeSection === sectionName
           ? "text-rose-500"
           : "text-black hover:text-rose-500"
          }`}
          >
            <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
      {/* LOGO */}
      <div className="flex items-center space-x-2 ">
        <h1 className="text-x1 hidden sm:block md:text-2xl text-blue-800">بصمة</h1>
        <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center flex-col">
          <IoFingerPrintOutline className="w-6 h-6 text-white" />
        </div>
      </div>    
     
    {/* burger menu */}
    <HiBars3BottomRight onClick={openNav} className="w-8 cursor-pointer text-black lg:hidden" />
    </div>
    </div>
  )
};

export default Nav;
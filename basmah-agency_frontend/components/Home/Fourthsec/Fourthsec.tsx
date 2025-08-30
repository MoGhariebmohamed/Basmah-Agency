import React from "react"
import Boxtext from "../../Helper/Boxtext";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";


const Fourthsec = () => {
  return (
  <div className="pt-16 pb-16 bg-gray-100"> 
  <div className="w-[80%] mx-auto">
  <Boxtext>خدماتنا</Boxtext>
  {/* Heading */}
  <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
نقدم أفضل خدماتنا لديك
  </h1>
  {/* Description */}
  <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:e-[60%] xl:w-[50%] text-gray-600">
     حن المتميزون والمتيزون نحنحن المتميزون والمتيزون نحن نحن المتميزون والمتيزون نحن 
        نحن المتميزون والمتيزون نحن 
  </p>
  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center 
  gap-y-12 mt-16">
    {/* First Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-pink-600 bg-opacity-20">
        <FaBriefcase className="w-6 h-6 text-orange-300" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-gray-800">نعمل كل حاجة كحقيبة أعمال</p>
        <p className="text-sm text-gray-700">مكلنيب نمببن نبرب مبرن منبية</p>
      </div>
    </div>
     {/* 2nd Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-pink-600 bg-opacity-20">
        <FaRocket className="w-6 h-6 text-orange-300" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-gray-800">نعمل كل حاجة زي الصاروخ</p>
        <p className="text-sm text-gray-700">مكلنيب نمببن نبرب مبرن منبية</p>
      </div>
    </div>
     {/* 3rd Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-pink-600 bg-opacity-20">
        <FaShoppingCart className="w-6 h-6 text-orange-300" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-gray-800">نعمل كل حاجة ك تجارة إلكترونية</p>
        <p className="text-sm text-gray-700">مكلنيب نمببن نبرب مبرن منبية</p>
      </div>
    </div>
     {/* 4th Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-pink-600 bg-opacity-20">
        <MdOutlineDesignServices className="w-6 h-6 text-orange-300" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-gray-800">نعمل كل حاجةك تصميمات</p>
        <p className="text-sm text-gray-700">مكلنيب نمببن نبرب مبرن منبية</p>
      </div>
    </div>
     {/* 5th Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-pink-600 bg-opacity-20">
        <IoColorPaletteOutline className="w-6 h-6 text-orange-300" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-gray-800">نعمل كل حاجة ك نقاشين بدون حدود</p>
        <p className="text-sm text-gray-700">مكلنيب نمببن نبرب مبرن منبية</p>
      </div>
    </div>
     {/* 6th Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-pink-600 bg-opacity-20">
        <FaChess className="w-6 h-6 text-orange-300" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-gray-800">نعمل كل حاجة ك خطط إستراتيجية</p>
        <p className="text-sm text-gray-700">مكلنيب نمببن نبرب مبرن منبية</p>
      </div>
    </div>
  </div>
  </div>
     </div>
  );
};

export default Fourthsec;
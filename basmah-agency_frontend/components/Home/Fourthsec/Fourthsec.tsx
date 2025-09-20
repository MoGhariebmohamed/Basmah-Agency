import React from "react"
import Boxtext from "../../Helper/Boxtext";
import { FaBriefcase, FaChess, FaHospitalAlt, FaHospitalSymbol, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPalette, IoColorPaletteOutline } from "react-icons/io5";


const Fourthsec = () => {
  return (
  <div dir="rtl" className="text-right pt-20 pb-16 bg-blue-200"> 
  <div className="w-[80%] mx-auto">
  <Boxtext>خدماتنا</Boxtext>
  {/* Heading */}
  <h1 className="mt-4 text-2xl md:text-3xl font-bold text-blue-950">
    أثر يدوم… ونجاح يتجدد
  </h1>
  {/* Description */}
  <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:e-[60%] xl:w-[50%] text-blue-950">
    لا نقدّم مجرد خدمات تسويق… بل نصنع أثرًا يبقى، ونفتح آفاقًا جديدة لنجاح يتجدد مع كل خطوة في رحلتكم      
  </p>
  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center 
  gap-y-12 mt-16">
    {/* First Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-[#fed7aa] bg-opacity-20">
        <FaBriefcase className="w-6 h-6 text-[#0097b2]" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-blue-950">إدارة الحملات الإعلانية على جميع المنصات الرقمية</p>
        <p className="text-sm text-blue-900">فيسبوك، إنستجرام، لينكدإن، جوجل</p>
      </div>
    </div>
     {/* 2nd Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-[#fed7aa] bg-opacity-20">
        <FaRocket className="w-6 h-6 text-[#0097b2]" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-blue-950">تحسين محركات البحث (SEO) لضمان تصدر البحث</p>
        
      </div>
    </div>
     {/* 3rd Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-[#fed7aa] bg-opacity-20">
        <FaShoppingCart className="w-6 h-6 text-[#0097b2]" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-blue-950">إنشاء وإدارة المواقع والمتاجر الإلكترونية</p>
        
      </div>
    </div>
     {/* 4th Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-[#fed7aa] bg-opacity-20">
        <MdOutlineDesignServices className="w-6 h-6 text-[#0097b2]" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-blue-950">كتابة المحتوى الرقمي</p>
        <p className="text-sm text-blue-900">تجاري، طبي، تعليمي، ترفيهي</p>
      </div>
    </div>
     {/* 5th Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-[#fed7aa] bg-opacity-20">
        <IoColorPalette className="w-6 h-6 text-[#0097b2]" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-blue-950">تصميم الهوية البصرية والعلامة التجارية بأسلوب احترافي</p>
        
      </div>
    </div>
     {/* 6th Box */}
    <div className="flex items-center space-x-5">
      {/* Icon */}
      <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col 
      bg-[#fed7aa] bg-opacity-20">
        <FaHospitalSymbol className="w-6 h-6 text-[#0097b2]" />
      </div>
      {/* Text Content */}
      <div>
        <p className="text-lg font-bold text-blue-950">التسويق الطبي المتخصص للمستشفيات والمراكز الطبية</p>
        
      </div>
    </div>
  </div>
  </div>
     </div>
  );
};

export default Fourthsec;
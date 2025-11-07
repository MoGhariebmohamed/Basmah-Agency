import React from "react"
import Image from "next/image"
import { MdOutlineAccessAlarm, MdOutlineTouchApp } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { LuPenLine } from "react-icons/lu";

const Thirdsec = () => {
  return <div dir="rtl" className="text-right pt-20 pb-16 bg-blue-100"> 
  <div>
    <h1 className="text-center text-2xl text-blue-950 font-bold">
        أهم ما يميز باقاتنا
    </h1>
  </div>
  {/* The Mian Grid */}
  <div className="w-[80%] mx-auto  mt-10 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
    {/* Inner grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* First box */}
        <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-3">
                {/* icon for box */}
                <div className="w-12 h-12 rounded-3xl flex items-center justify-center 
                flex-col bg-pink-500 bg-opacity-20">
                    <MdOutlineTouchApp className="w-6 h-6 text-orange-450" />
                </div>
                {/* Heading */}
                <h1 className="text-lg font-bold text-gray-700">
                 باقات مصممة بمرونة     
                </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
                تراعي حجم مشروعك ومرحلته، وتنمو وتتطور معك في كل خطوة
            </p>
        </div>
        {/* Second box */}
        <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-3">
                {/* icon for box */}
                <div className="w-12 h-12 rounded-3xl flex items-center justify-center 
                flex-col bg-pink-500 bg-opacity-20">
                    <GoWorkflow className="w-6 h-6 text-orange-450" />
                </div>
                {/* Heading */}
                <h1 className="text-lg font-bold text-gray-700">
                    تحليل دقيق
                </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
                قراراتنا مبنية على بيانات دقيقة و دراسة، لا على تخمينات
            </p>
        </div>
        {/* Third box */}
        <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-3">
                {/* icon for box */}
                <div className="w-12 h-12 rounded-3xl flex items-center justify-center 
                flex-col bg-pink-500 bg-opacity-20">
                    <LuPenLine className="w-6 h-6 text-orange-450" />
                </div>
                {/* Heading */}
                <h1 className="text-lg font-bold text-gray-700">
                    إبداعية
                </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
                محتوى وتصميم يترك بصمة مميزة في ذهن جمهورك
            </p>
        </div>
        {/* Fourth box */}
        <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-3">
                {/* icon for box */}
                <div className="w-12 h-12 rounded-3xl flex items-center justify-center 
                flex-col bg-pink-500 bg-opacity-20">
                    <MdOutlineAccessAlarm className="w-6 h-6 text-orange-450" />
                </div>
                {/* Heading */}
                <h1 className="text-lg font-bold text-gray-700">
                    متكاملة
                </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
                كل ما تحتاجه لبناء حضور رقمي قوي؛ من الهوية البصرية حتى الحملات الإعلانية
            </p>
        </div>
    </div>
    {/* Image section */}
    <div>
        <Image src="/images/700.png" alt="خدماتنا" width={700} height={700} />
    </div>
  </div>
   </div>
};

export default Thirdsec;
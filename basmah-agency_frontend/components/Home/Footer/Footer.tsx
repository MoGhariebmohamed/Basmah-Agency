import React from 'react'
import { BsInstagram, BsSnapchat, BsTiktok, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-slate-700">
        <div className="items-center ">
                <h1 className="text-2xl font-bold text-center text-white">
                    أستعد معنا للإنطلاق 
                </h1>
                <div className="items-center text-center">
                 <a href="#" title=""
                    className="relative mt-4 z-10 inline-flex items-center justify-center 
                    w-full px-15 py-3 text-3xl font-bold text-white transition-all duration-200 
                    bg-green-800 border-2 border-transparent sm:w-auto rounded-xl font-pj 
                    hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                        يلا بينا  
                    </a>
                    </div>
        </div>
        <div className="w-[80%] mx-auto mt-8 place-items-center grid-cols-1 sm:grid-cols-2
        grid md:grid-cols-3 lg:grid-cols-3 text-white text-right">
            {/* 1st section */}
            <div className="space-y-1 mt-4">
            <h1 className="text-lg font-bold">
                بصمة للتسويق الرقمي
            </h1>
            <p className="text-gray-200 font-meduim cursor-pointer
            text-sm hover:text-green-500">
                محفوظة  لوكالة بصمة 2025
            </p>
            </div>
            {/* 2nd section */}
            <div className="space-y-1 mt-4">
            <h1 className="text-lg font-bold">
                صادقنا وتواصل معنا
            </h1>
            <div className="flex items-center space-x-4 mt-4 md:mt-0
             cursor-pointer text-sm">
                <span className="text-yellow-300 hover:text-green-600">
                    <FaFacebook />
                </span>
                <span className="text-yellow-300 hover:text-green-600">
                    <BsTwitterX />
                </span>
                <span className="text-yellow-300 hover:text-green-600">
                    <BsInstagram />
                </span>
                <span className="text-yellow-300 hover:text-green-600">
                    <BsTiktok />
                </span>
                <span className="text-yellow-300 hover:text-green-600">
                    <BsSnapchat />
                </span>
            </div>
            </div>
            {/* 3rd section */ }
            <div className="space-y-1 mt-4">
            <h1 className="text-lg font-bold">
                للتواصل والدعم               
            </h1>
            <p className="text-gray-200 font-meduim cursor-pointer
            text-sm hover:text-green-500">
                ميلات الدعم
            </p>
            </div>
            </div>
            {/* Bottom */}
            <div className="w-[80%] mt-8 mx-auto boarder-t pt-8 flex flex-col md:flex-row 
            justify-between items-center text-white grid-cols-1 sm:grid-cols-2
        grid md:grid-cols-3 lg:grid-cols-2">
                <p className="text-left md:text-left">
                    copyright @ 2025 Basmah Agency All rights reserved
                </p>
                <p className="text-left md:text-center">
                    جميع الحقوق محفوظة  @ وكالة بصمة 2025
                </p>
            </div>

        </div>
        
  )
}
export default Footer
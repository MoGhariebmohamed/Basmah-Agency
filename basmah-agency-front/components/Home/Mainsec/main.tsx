import React from "react"
import Image from "next/image"

const Mainsec = () => {
    return (
        <div className="relative w-full h-[110vh] sm:h-screen 
        bg-[url('/images/cellhexa.jpg')] bg-cover flex
         justify-center flex-col bg-center">
            <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 
            xl:grid-cols-2 gap-10">
                {/* text content */}
                <div>
                    <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
                        يلا نعمل أعلانات
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-red-500
                    leading-[2.5rem] md:leading-[3.5rem]">
                       وتم اختياره سريعًا للانضمام 
                        <span className="text-green-800"> بصمة أيجانسي </span>
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base font-meduim text-blue-800">
                        Web page related images
Jan 7, 2025 · نتتبع قصة ماجد الذي يجبر على ترك حياته الرغيدة والانتقال من مدرسته الخاصة إلى أخرى مدرسة حكومية، وبمرور الأحداث استطاع كسب احترام زملائه بفضل مهاراته الاستثنائية في كرة القدم، وتم اختياره سريعًا للانضمام إلى فريق المدرسة في مسابق
                    </p>
                <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center
                space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative">
                        <div className="absolute -inset-5">
                     <div
                        className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r
                         from-yellow-400 via-pink-500 to-green-600">
                     </div>
    </div>
    <a href="#" title=""
        className="relative z-10 inline-flex items-center justify-center 
        w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 
        bg-green-800 border-2 border-transparent sm:w-auto rounded-xl font-pj 
        hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">
        تواصل معنا
    </a>
</div>
                </div>
                </div>
                {/*image content */}
                <div className="mx-auto hidden xl:block">
                    <Image 
                    src="/images/handonlap.jpg" 
                    alt="image"
                    width={900} 
                    height={900}
                    />
                </div>
            </div>
         </div>
    )
}
export default Mainsec
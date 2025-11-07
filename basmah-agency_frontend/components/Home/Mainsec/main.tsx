import React from "react"
import Image from "next/image"

const Mainsec = () => {
    return (
        <div dir="rtl" className="relative w-full h-[110vh] sm:h-screen 
        bg-[url('/images/1080_920.png')] bg-cover flex
         justify-center flex-col bg-center text-right">
            <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 
            xl:grid-cols-2 gap-10">
                {/* text content */}
                <div>
                    <p className="text-sm sm:text-base md:text-xl font-bold text-primary-00">
                        </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950
                    leading-[2.5rem] md:leading-[3.5rem]">
                        بصمة للتسويق الرقمي
                        <span className="text-[#006f82] block"> نترك أثرًا… يتجاوز التوقعات </span>
                    </h1>
                    <p className="text-xl lg:text-2xl sm:text-sm md:text-base font-bold text-blue-950">
                        نؤمن أن لكل مشروع بصمته الخاصة، ولكل فكرة طابعها الفريد. ومن هنا، نصيغ لك حلولًا تسويقية وهوية بصرية تُجسّد روح مشروعك، وتُترجم رسالته إلى تجربة حيّة تبقى في الذاكرة.

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
    <a 
        href="https://wa.me/201016825550?text=مرحبًا%20أريد%20الاستفسار%20عن%20خدماتكم" 
        title="تواصل معنا علي واتس أب"
        target="blnk"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center justify-center 
        w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 
        bg-[#0097b2] border-2 border-transparent sm:w-auto rounded-xl font-pj 
        hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">
        تواصل معنا
    </a>
</div>
                </div>
                </div>
                {/*image content */}
                <div className="mx-auto hidden xl:block">
                    <Image 
                    src="/images/900.png" 
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
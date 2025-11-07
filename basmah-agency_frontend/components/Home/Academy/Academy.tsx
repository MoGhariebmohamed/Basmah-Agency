import React from "react";
import Boxtext from "../../Helper/Boxtext";
import Image from "next/image";


const Academy = () => {
  return <div dir="rtl" className="text-right bg-opacity-50 pt-20 pb-16">
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-2">
        <Boxtext>أكاديمية بصمة</Boxtext>
        {/* Heading */}
        <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
            نحن لا نعلّمك التسويق الرقمي … بل نعلّمك كيف تُغيّر قواعد اللعبة
        </h1>
        {/* Description */}
        <p className="mt text-gray-800"> 
            أكاديمية بصمة… حيث المعرفة تتحول إلى خبرة، والخبرة تتحول إلى قوة.
أكاديمية بصمة ليست مجرد محتوى، بل تجربة تعلّم تُشعرك أنك تكتسب خبرة سنوات في وقت قصير.

        </p>
        <p>كورسات تسويق رقمي 
            كورسات تسويق طبي 
            كورس مهارات كتابة المحتوى 
            كورس استراتيجيات التسويق
        </p>
        
        {/* Button */}
        <div>
            <a
                href={`https://wa.me/201016825550?text=${encodeURIComponent(" أريد الإستفسار عن أكاديمية بصمة")}`} 
                title="تواصل معنا علي واتس أب"
                target="blnk"
                rel="noopener noreferrer"
                className="relative mt-6 z-10 inline-flex items-center justify-center 
                w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 
                bg-green-800 border-2 border-transparent sm:w-auto rounded-xl font-pj 
                hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">
                        تحدث معنا 
            </a>
        </div>
        </div>


        {/* Images */}
        <div className="sm:flex items-center gap-5 space-y-4 sm:space-y-0 
        lg:col-span-3">
            <div className="relative overflow-hidden">
            <Image 
            src="/images/medical1.png"
            alt="اكاديمتنا"
            width={300}
            height={300}
            className="rounded-lg"
            />
            <div className="absolute w-full h-[2rem] bottom-0 p-4 
            bg-rose-400 rounded-lg">
                <p className="text-lg text-white font-bold"></p>
                <p className="text-gray-200"></p>
            </div>
            </div>
            
            <div className="relative overflow-hidden">
            <Image 
            src="/images/medical2.png"
            alt="اكاديمتنا"
            width={300}
            height={300}
            className="rounded-lg"
            />
            <div className="absolute w-full h-[2rem] bottom-0 p-4 
            bg-rose-400 rounded-lg">
                <p className="text-lg text-white font-bold"></p>
                <p className="text-gray-200"></p>
            </div>
            </div>
        </div>
    </div>
    </div>;
};

export default Academy;

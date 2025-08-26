import React from "react"
import Image from "next/image"
import Boxtext from "../../Helper/Boxtext"

const Secondsec = () => {
  return (
  <div className="pt-16 pb-16">
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Area */}
        <div>
            <Image src="/images/mapping dots.jpg" alt="تعرف علينا" width={600} height={600}/>
        </div>
        {/* Text Area */}
        <div>
           <Boxtext> أعرف عنا </Boxtext>
           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 
           sleading-[205rem] sm:leading[3rem]">
            كل ما تريد معرفته عن بصمة
           </h1>
           <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            Web page related images
Jan 7, 2025 · نتتبع قصة ماجد الذي يجبر على ترك حياته الرغيدة والانتقال من مدرسته الخاصة إلى أخرى مدرسة حكومية، وبمرور الأحداث استطاع كسب احترام زملائه بفضل مهاراته الاستثنائية في كرة القدم، وتم اختياره سريعًا للانضمام إلى فريق المدرسة في مسابق
           </p>
           <button className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 
           border-[#f68967]">
            أعرف أكتر &#8594;
           </button>
           <div className="mt-8 border-1-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-700 font-meduim">
                &quot; نحن نصنع فارق دائما &quot;
              </p>
              <div className="flex items-center space-x-6 mt-6">
                <Image src="/images/laptopscreen.jpg"
                 alt="نحن هنا" 
                 width={40} 
                 height={40} 
                 className="rounded-full"
                 />
                 <div>
                  <p className="font-meduim">
                  شخصية بصمة
                  </p>
                  <p className="text-gray-700 text-sm">
                    أسم بصمة@ basmah
                  </p>
                 </div>
              </div>
            </div>

           </div>
        </div>
    </div>
  </div>
  );
};

export default Secondsec;
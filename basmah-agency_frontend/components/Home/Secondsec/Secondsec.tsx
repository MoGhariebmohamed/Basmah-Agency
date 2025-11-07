"use client";
import React, { useState } from "react";
import Image from "next/image";
import Boxtext from "../../Helper/Boxtext";

const Secondsec = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText = `
            نكتب قصص العلامات التجارية بلغة السوق، ونحوّل الرؤية إلى حضور رقمي لا يُنسى.
وعلى مدار أكثر من ثماني سنوات، جمعنا بين دقة الأرقام و جرأة الإبداع و بين فهم السوق و إتقان الأدوات.
نخاطب جمهوركم، نقرأ سلوكهم، ونصنع لهم تجربة تجعلهم يختارونكم دون غيركم.
نسعى أن نكون البوصلة التي يسترشد بها كل مشروع طموح في المنطقة، والوجهة الأولى لمن يبحث عن لغة بصرية أصيلة، واستراتيجية تواصل قادرة على صناعة الفارق عن طريق : 

الإبداع: 
نكسر حدود النمطية لنبتكر بصمة تليق بك.
الدقة:
 نؤمن أن التفاصيل الصغيرة هي التي تُرسم مستقبلك الرقمي.
الشفافية:
 نضع الحقيقة كاملة أمامك… فالثقة أساس كل شراكة.
الالتزام : 
وعودنا ليست مجرد شعارات، بل وقت وجودة وأثر يبقى.
`
const shortText = fullText.slice(0, 190) + ".......";
  return (
  <div dir="rtl" className="text-right bg-opacity-50 pt-20 pb-16">
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Area */}
        <div>
            <Image src="/images/600.png" alt="تعرف علينا" width={600} height={600}/>
        </div>
        {/* Text Area */}
        <div>
           <Boxtext> من نحن؟ </Boxtext>
           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 
           sleading-[205rem] sm:leading[3rem]">
            لسنا مجرد شركة تسويق رقمي … نحن بصمة
           </h1>
           <p className="mt-3 leading-relaxed text-xl lg:text-xl sm:text-base text-gray-700">
            {showMore ? fullText : shortText}
           </p>
           
           <button 
            onClick={() => setShowMore(!showMore)} 
            className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 
           border-[#f68967]">
            {showMore ? "عرض أقل ←" : "أعرف أكتر →"}
           </button>

           <div className="mt-8 border-1-2 border-gray-200">
            <div className="ml-6">
              <p className="text-blue-950 text-xl font-bold">
                نحن نصنع فارق دائما 
              </p>
              <div className="flex items-center space-x-6 mt-6">
              
              </div>
            </div>

           </div>
        </div>
    </div>
  </div>
  );
};

export default Secondsec;
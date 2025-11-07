import React from "react";
import Achievmentslog from "./Achievmentslog";


const Achievments = () => {
  return <div dir="rtl" className="text-right bg-blue-300 pt-20 pb-16">
    <h1 className="text-center mt-3 text-2xl text-blue-900 font-bold">
        إنجازاتنا تتحدث عنا</h1>
    {/* sub heading */}
    <p className="mt-3 text-center font-meduim text-gray-700 
    w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
مضاعفة نسب التفاعل الرقمي لعملائنا بما يفوق 300%.


إدارة حملات إعلانية حققت عوائد استثنائية في وقت قياسي.


شراكات مع علامات تجارية قادت إلى أسواق جديدة وفرص غير مسبوقة.
    </p>
    {/* grid */}
    <div className="grid grid-cols-1 grid-cols-2 gap-4 items-center 
    mt-16 w-[80%] mx-auto">
        <div className="">
            <Achievmentslog image="/images/1.png"
             name="lakes" 
             rating="5"
             />
        </div>
        <div className="">
            <Achievmentslog image="/images/2.png"
             name="joedoe" 
             rating="4.5"
             />
        </div>
        <div className="">
            <Achievmentslog image="/images/3.png"
             name="robo" 
             rating="4.5"
             />
        </div>
        <div className="">
            <Achievmentslog image="/images/4.png"
             name="one" 
             rating="4.5"
             />
        </div>
    </div>
  </div>;
};

export default Achievments;
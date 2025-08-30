import React from "react";
import Achievmentslog from "./Achievmentslog";


const Achievments = () => {
  return <div className="pt-16 pb-16">
    <h1 className="text-center text-2xl text-blue-900 font-bold">
        إنجازاااااااتنا تتحدث عنا</h1>
    {/* sub heading */}
    <p className="mt-3 text-center font-meduim text-gray-700 
    w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
        كل حاجة عندنا عملناها ومحدش زينا ط\بم ملرمية ةر 
        بلر للاي  وروبر ةري م بةركل حاجة عندنا عملناها ومحدش زيناكل حاجة عندنا عملناها ومحدش زينا
    </p>
    {/* grid */}
    <div className="grid grid-cols-1 grid-cols-2 gap-4 items-center 
    mt-16 w-[80%] mx-auto">
        <div className="">
            <Achievmentslog image="/images/lake.jpg"
             name="lakes" 
             rating="5"
             />
        </div>
        <div className="">
            <Achievmentslog image="/images/joedoe.jpg"
             name="joedoe" 
             rating="4.5"
             />
        </div>
        <div className="">
            <Achievmentslog image="/images/robo.jpg"
             name="robo" 
             rating="4.5"
             />
        </div>
        <div className="">
            <Achievmentslog image="/images/one.png"
             name="one" 
             rating="4.5"
             />
        </div>
    </div>
  </div>;
};

export default Achievments;
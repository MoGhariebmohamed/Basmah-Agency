import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

type Property = {
    image: string;
    name: string;
    rating: string;
};

const Achievmentslog = ({ image, name, rating }: Property) => {
  return <div className="bg-white shadow-md p-8 sm:flex 
  items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg">
{/* Image */}
<div>
    <Image src={image}
    alt={name}
    width={250}
    height={250}
    className="rounded-lg" />
</div>
<div>
    <h1 className="text-lg font-bold text-blue-900">{name}</h1>
    <div className="flex items-center space-x-3">
        <p className="text-2xl font-bold text-orange-600">{rating}</p>
        <div className="flex items-center">
        <FaStar className="w-4 h-4 text-green-700" />
        <FaStar className="w-4 h-4 text-green-700" />
        <FaStar className="w-4 h-4 text-green-700" />
        <FaStar className="w-4 h-4 text-green-700" />
        <BsStarHalf className="w-4 h-4 text-green-700" />
        </div>
    </div>
    <p className="mt-2 text-base text-gray-600 font-meduim">إنجازااااااات ولا اروع من كدولا اروعولا اروعولا اروعولا اروعولا اروعولا اروعولا اروعولا اروعولا اروعولا اروع إنجازااااااات ولا اروع من كدا</p>
</div>
    </div>;
};

export default Achievmentslog;
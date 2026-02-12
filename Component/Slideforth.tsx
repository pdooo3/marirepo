import Image from "next/image";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";

import Arrow from "./Arrow";
export default function SlideForth() {
  return (
    <div className="flex flex-col h-96 w-full ">
      <div className=" flex flex-row w-full h-1/3 border-b border-b-gray-800/50 justify-around mb-6">
        <button className="text-gray-300 cursor-pointer hover:bg-blue-950  hover:text-white rounded-sm w-20">
          آدرس
        </button>
        <div className="flex items-center">
          <p className="text-nowrap">دماوند ، گیلاوند ، جاده وادان</p>
        </div>
      </div>
      <div className="relative flex w-full h-2/3">
        <div className="absolute flex flex-col justify-center items-center z-10 w-full h-1 text-shadow-amber-50">
          <span>شماره صفحه</span>
          <label>01/05</label>
          <div className="absolute left-0 right-0 w-full h-full">
            <BsArrow90DegRight className="text-gray-900" />
            {/* </div> */}
            {/* <div className="absolute bottom-0 left"> */}
            <BsArrow90DegLeft className="text-gray-900" />
          </div>
        </div>
        <div className="flex flex-row w-full h-60 space-x-4 p-2">
          <div className="relative flex w-1/2 h-full">
            <Image
              src="/f.jpeg"
              fill
              alt="pic4"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative flex w-1/2 h-full">
            <Image
              src="/g.jpeg"
              fill
              alt="pic4"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

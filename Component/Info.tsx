import Image from "next/image";
import Icons from "./Icons";

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-4/7 p-3">
        <Image
          src="/d.jpeg"
          width={700}
          height={500}
          alt="slide3"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full md:w-3/7">
        <div className="flex flex-nowrap justify-center md:items-start md:border-0 border-b border-gray-800/30 p-3">
          {/* <button className="text-gray-400 cursor-pointer hover:bg-blue-950  hover:text-white rounded-sm w-20">
            مشاهده
          </button> */}
          <h3 className="text-nowrap">خرید و فروش بهترین املاک مسکونی</h3>
          {/* <div className="flex flex-row space-x-5 text-gray-600 p-3 md:p-0">
            <Icons />
          </div> */}
        </div>
        <div className="flex flex-col w-ful mt-4">
          <div className="flex items-center md:items-end  justify-center space-x-2 flex-col flex-nowrap">
            <h3>نوساز یا کلنگی</h3>
            <p>قیمت هر متر مربع</p>
            <button className="text-gray-400 cursor-pointer hover:bg-blue-950  hover:text-white rounded-sm w-20">
              مشاهده
            </button>
          </div>
          <div className="w-full">
            <Image
              src="/c.jpeg"
              width={400}
              height={200}
              alt="slide3"
              className="rounded-2xl objext-cover p-3 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

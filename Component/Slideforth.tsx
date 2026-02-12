import Image from "next/image";
import Arrow from "./Arrow";
export default function SlideForth() {
  return (
    <div className="flex flex-col h-96 w-full p-4">
      <div className="flex flex-row w-full h-1/3 border-b border-b-gray-800/50 justify-around mb-6">
        <button className="text-gray-300 cursor-pointer hover:bg-blue-950  hover:text-white rounded-sm w-20">
          آدرس
        </button>
        <div className="flex items-center">
          <p className="text-nowrap">دماوند ، گیلاوند ، جاده وادان</p>
        </div>
      </div>
      <div className="flex flex-row w-full h-2/3 space-x-3">
        <div className="relative flex flex-col w-1/2">
          <span>شماره صفحه</span>
          <label>01/05</label>
          <div className="absolute bottom-0 flex flex-row space-x-3">
            <Arrow />
          </div>
        </div>
        <div className="relative flex w-1/2 h-60">
          <Image
            src="/f.jpeg"
            fill
            alt="pic4"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

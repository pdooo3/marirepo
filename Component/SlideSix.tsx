import Image from "next/image";
import Arrow from "./Arrow";
export default function SlideSix() {
  return (
    <div className="flex flex-col w-full h-100 p-2">
      <div className="flex w-full h-1/2 border-b border-gray-800/40 flex-col items-center justify-center">
        <button>ارتباط با ما</button>
        <h2>خرید و اجاره</h2>
      </div>
      <div className="flex flex-row w-full h-1/2 space-x-8 mt-5">
        <div className="flex w-1/2 h-full">
          <Image
            src="/b.jpeg"
            height={500}
            width={700}
            alt="pic7"
            className="w-full rounded-xl"
          />
        </div>
        <div className="relative flex flex-col w-1/2 h-full items-end">
          <h2>رهن</h2>
          <p className="flex flex-nowrap">قیمت هر مترمربع </p>
          <p className="flex flex-nowrap">متراژ</p>
          <div className="absolute right-10 bottom-0 flex flex-row w-1/5  space-x-3">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}

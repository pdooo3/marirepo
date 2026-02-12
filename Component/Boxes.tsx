import Card from "../app/Card/page";
import Image from "next/image";

export default function Boxes() {
  const slides = [
    { id: 1, pic: "/a.jpeg", title: "رهن", text: "زمین", price: 555000 },
    { id: 2, pic: "/b.jpeg", title: "خرید", text: "خانه", price: 200000 },
    { id: 3, pic: "/c.jpeg", title: "wow", text: "home", price: 199000 },
  ];

  return (
    <div className="flex w-full flex-col md:flex-row space-x-5 overflow-hidden">
      <div className="relative p-3 w-full md:w-1/2 h-40 overflow-hidden">
        <Card slides={slides} />
      </div>

      <div className="flex flex-row w-full h-40 p-3 space-x-2">
        <div className="relative  w-1/2">
          <Image src="/c.jpeg" fill className="rounded-sm" alt="ax" />
        </div>
        <div className="relative w-1/2">
          <Image src="/a.jpeg" fill className="rounded-sm " alt="ax2" />
        </div>
      </div>
      <div className="flex items-center flex-col p-2 md:pt-5 w-full h-1/2 md:w-1/2">
        <button className="text-gray-400 cursor-pointer hover:bg-blue-950  hover:text-white rounded-sm w-20">
          مشاهده
        </button>
        <h1>املاک</h1>
        <div className="flex flex-row space-x-5">
          <h3>رهن</h3>
          <h3>اجاره</h3>
          <h3>خرید</h3>
        </div>
      </div>
    </div>
  );
}

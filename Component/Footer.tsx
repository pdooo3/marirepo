import { FaArrowUpLong } from "react-icons/fa6";
import Icons from "./Icons";
export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-20 ">
      <div className="flex items-center justify-center fixed right-2 bottom-2 w-12 h-12 rounded-full bg-amber-600">
        <FaArrowUpLong />
      </div>
      <div className="flex  flex-col w-full border-t justify-center items-center border-gray-800/20 mt-20 p-2">
        <p>طراحی و تنظیم سایت </p>
        <button className="text-gray-700 cursor-pointer hover:bg-blue-950 rounded-xl w-30">
          !! بیشتر
        </button>
      </div>

      <div className="flex space-x-7 p-2">
        <Icons />
      </div>
    </div>
  );
}

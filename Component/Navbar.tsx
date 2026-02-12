import { IoMdCall } from "react-icons/io";
import { HiHomeModern } from "react-icons/hi2";
import { FcHome } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
export default function Navbar() {
  return (
    <nav className="m-3 absolute inset-0 z-10">
      <div className="flex items-center justify-between p-4 text-gray-200 bg-black/20 backdrop-blur-[5px] rounded-2xl">
        <ul className="flex space-x-5 flex-nowrap whitespace-nowrap">
          <li className="cursor-pointer hover:text-black">
            <HiHomeModern />
          </li>
          <li className="cursor-pointer hover:text-black">
            <FaBookmark />
          </li>
          <li className="cursor-pointer hover:text-black">
            <IoMdCall />
          </li>
        </ul>
        <h1>
          <FcHome className="w-8 h-8" />
        </h1>
        <div className="relative">
          <input className="w-20" />
          <i className="absolute right-1 top-1">
            <CiSearch className="w-5 h-5" />
          </i>
        </div>
      </div>
    </nav>
  );
}

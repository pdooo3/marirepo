import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";

export default function Arrow() {
  return (
    <>
      <div className="flex justify-center items-center  w-full cursor-pointer">
        <BsArrow90DegLeft className="w-8 h-8" />
      </div>
      <div className="flex justify-center items-center  w-full cursor-pointer">
        <BsArrow90DegRight className=" w-8 h-8" />
      </div>
    </>
  );
}

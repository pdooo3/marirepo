"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { EmblaControls } from "./EmblaCntrols";
export default function SlideForth() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollNext, scrollPrev, scrollTo } =
    EmblaControls(emblaApi);

  const slides = ["/a.jpeg", "/b.jpeg", "/f.jpeg", "/g.jpeg"];

  return (
    <div className="flex flex-col h-96 w-full p-4">
      {/* هدر */}
      <div className="flex flex-row w-full h-1/3 border-b border-b-gray-800/50 justify-around mb-6">
        <button className="text-gray-300 cursor-pointer hover:bg-blue-950 hover:text-white rounded-sm w-20">
          آدرس
        </button>
        <div className="flex items-center">
          <p className="whitespace-nowrap">دماوند ، گیلاوند ، جاده وادان</p>
        </div>
      </div>

      {/* اسلایدر */}
      <div className="flex flex-row w-full h-2/3">
        <div className="relative w-1/2">
          {/* DOTS */}
          <div className="flex justify-start gap-2 mt-3 ml-3">
            {slides?.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition 
              ${
                index === selectedIndex
                  ? "bg-white scale-110"
                  : "bg-gray-500/50"
              }`}
              />
            ))}
          </div>
          <button
            onClick={scrollPrev}
            className="absolute bottom-0 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded"
          >
            <BsArrow90DegLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute bottom-0 left-16 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded"
          >
            <BsArrow90DegRight className="w-6 h-6" />
          </button>
        </div>

        <div ref={emblaRef} className="overflow-hidden w-1/2 h-full">
          <div className="flex h-full">
            {slides?.map((src, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full">
                <Image
                  src={src}
                  fill
                  alt={`slide-${index}`}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

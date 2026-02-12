"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaControls } from "./EmblaCntrols";

import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
type Slide = {
  id: number;
  pic: string;
  title: string;
  text: string;
  price: number;
};

export default function SlideSix() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const slides = [
    { id: 1, pic: "/a.jpeg", title: "fff", text: "home", price: 33 },
    { id: 2, pic: "/b.jpeg", title: "ggg", text: "mmm", price: 44 },
    { id: 3, pic: "/c.jpeg", title: "rahn", text: "iii", price: 22 },
  ];
  if (!slides.length) return null;

  const { scrollNext, scrollPrev } = EmblaControls(emblaApi);

  return (
    <div className=" w-full h-100 p-2">
      <div className="flex w-full h-1/4 border-b border-gray-800/40 flex-col items-center justify-center">
        <button>ارتباط با ما</button>
        <h2>خرید و اجاره</h2>
      </div>
      <div className="relative w-full flex flex-col h-full">
        <div ref={emblaRef} className="overflow-hidden w-full h-3/4">
          <div className="flex h-full">
            {slides?.map((slide, index) => (
              <div
                key={slide.id}
                className="shrink-0 w-80 md:w-96 lg:w-1/3 p-4 flex flex-col"
              >
                <div className="flex flex-row w-full h-full">
                  <div className="flex w-1/2 h-full">
                    <div className="relative  flex-[0_0_100%] h-full">
                      <Image
                        src={slide.pic}
                        fill
                        alt={`slide-${index}`}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex w-1/2 flex-col text-right flex-nowrap p-4">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <p>{slide.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-2 bottom-14 w-2/4 h-1/6 space-x-6">
          <button
            onClick={scrollPrev}
            className=" text-white bg-black/50 p-2 rounded"
          >
            <BsArrow90DegLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className=" text-white bg-black/50 p-2 rounded"
          >
            <BsArrow90DegRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

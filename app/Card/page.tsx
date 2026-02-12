"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
type Slide = {
  id: number;
  pic: string;
  title: string;
  text: string;
  price: number;
};
export default function Card({ slides = [] }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);

      autoplayRef.current = setTimeout(() => {
        emblaApi.scrollNext();
        play();
      }, 3000);
    };

    play();

    const onUserScroll = () => play();
    emblaApi.on("pointerDown", onUserScroll);
    emblaApi.on("dragStart" as any, onUserScroll);

    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      emblaApi.off("pointerDown", onUserScroll);
      emblaApi.off("dragStart" as any, onUserScroll);
    };
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {slides?.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-96 md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="flex flex-row shadow-lg w-full rounded-sm">
              <div className="relative flex w-2/6 max-sm:w-4/6 h-30 ">
                <Image
                  src={slide.pic}
                  fill
                  className="object-cover p-2 rounded-2xl"
                  alt="card-pic"
                />
              </div>
              <div className="pr-5 pt-4 text-right w-4/6">
                <h3 className="pb-2">{slide.title}</h3>
                <p>{slide.text}</p>
                <p>{slide.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

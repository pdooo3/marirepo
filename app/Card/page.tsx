"use client";
import { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
type Slide = {
  id: number;
  pic: string;
  title: string;
  text: string;
  price: number;
};
export default function Card({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (!emblaApi) return;

    // هر 3 ثانیه اسلاید بعدی
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    // پاک کردن interval هنگام unmount
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-96 md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="flex flex-row shadow-xl w-full rounded-sm">
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

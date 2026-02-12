"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaControls } from "../../Component/EmblaCntrols";

type Slide = {
  id: number;
  pic: string;
  title: string;
  text: string;
  price: number;
};

type CardProps = {
  slides?: Slide[];
};

export default function Card({ slides = [] }: CardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  if (!slides.length) return null;
  const {} = EmblaControls(emblaApi, { autoplay: true });

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {slides?.map((slide) => (
          <div key={slide.id} className="shrink-0 w-96 md:w-1/2 lg:w-1/3 p-4">
            <div className="flex shadow-lg w-full rounded-md">
              {/* Image */}
              <div className="relative w-2/6 max-sm:w-4/6 h-32">
                <Image
                  src={slide.pic}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 640px) 66vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover p-2 rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="w-4/6 pr-5 pt-4 text-right">
                <h3 className="font-semibold pb-1">{slide.title}</h3>
                <p>{slide.text}</p>
                <p className="mt-2">{slide.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

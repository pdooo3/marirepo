"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type Options = {
  autoplay?: boolean;
};

export function EmblaControls(emblaApi?: EmblaCarouselType, options?: Options) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Controls ---------------- */

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  /* ---------------- Events ---------------- */

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    setScrollProgress(emblaApi.scrollProgress());
  }, [emblaApi]);

  /* ---------------- Autoplay ---------------- */

  useEffect(() => {
    if (!emblaApi || !options?.autoplay) return;

    const startAutoplay = () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);

      autoplayRef.current = setTimeout(() => {
        emblaApi.scrollNext();
        startAutoplay();
      }, 3000);
    };

    startAutoplay();

    // وقتی کاربر تعامل داشت، autoplay ریست شود
    const resetAutoplay = () => startAutoplay();

    emblaApi.on("pointerDown", resetAutoplay);
    emblaApi.on("select", resetAutoplay);

    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      emblaApi.off("pointerDown", resetAutoplay);
      emblaApi.off("select", resetAutoplay);
    };
  }, [emblaApi, options]);

  /* ---------------- Init ---------------- */

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);

    onSelect();
    onScroll();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  return {
    selectedIndex,
    scrollSnaps,
    scrollProgress,
    scrollNext,
    scrollPrev,
    scrollTo,
  };
}

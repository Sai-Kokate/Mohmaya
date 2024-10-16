"use client";

import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SlideContentType, SlidesContent } from "../constants/SlidesContent";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import DesktopSlide from "./DesktopSlide";
import MobileSlide from "./MobileSlide";

interface TShirtCarouselProps {
  isMobile?: boolean;
}

export default function TShirtCarousel({
  isMobile = false,
}: TShirtCarouselProps) {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState<number>(0);

  const carouselOptions: EmblaOptionsType = {
    loop: true,
    startIndex: 0,
  };

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full h-full">
      <Carousel
        setApi={setApi}
        className={`w-full h-full flex justify-center mx-auto ${
          !isMobile ? "items-center" : "items-start"
        }`}
        plugins={[plugin.current]}
        opts={carouselOptions}
      >
        <CarouselContent>
          {SlidesContent && SlidesContent.length > 0 ? (
            SlidesContent.map((slide: SlideContentType, index: number) => (
              <CarouselItem key={index}>
                {isMobile ? (
                  <MobileSlide {...slide} />
                ) : (
                  <DesktopSlide {...slide} />
                )}
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="flex items-center justify-center h-64">
                <p>No slides available</p>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>

        <div
          className={`absolute flex items-center justify-between pointer-events-none ${
            isMobile ? "p-[10px] w-full" : "inset-0 p-[20px]"
          } `}
        >
          <Button
            variant="ghost"
            size="icon"
            className={`h-[40px] w-[40px] rounded-full pointer-events-auto !important ${
              isMobile && "absolute top-48 left-3 "
            }`}
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-[40px] w-[40px] text-white hover:text-orange" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={` h-[40px] w-[40px] rounded-full pointer-events-auto !important ${
              isMobile && "absolute top-48 right-3"
            }`}
            onClick={scrollNext}
          >
            <ChevronRight className="h-[40px] w-[40px] text-white hover:text-orange" />
          </Button>
        </div>
      </Carousel>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {SlidesContent &&
          SlidesContent.length > 0 &&
          SlidesContent.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-8 h-8 rounded-full transition-all duration-50 text-white text-[16px] border-white border-2 ",
                current === index ? "bg-orange w-8" : "bg-white/50"
              )}
              onClick={() => api?.scrollTo(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}

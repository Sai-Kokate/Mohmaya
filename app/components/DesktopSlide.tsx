/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { SlideContentType } from "../constants/SlidesContent";

const DesktopSlide = (slide: SlideContentType) => {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="max-w-[1200px] max-h-[460px] grid grid-cols-[.6fr_1fr_.6fr] grid-rows-auto auto-cols-[1fr] place-items-center gap-[50px] w-full">
        <div className="flex flex-col justify-start items-end w-full gap-[25px]">
          <h1 className="text-left tracking-[0.035em] cursor-default font-monigue text-[20px] font-normal leading-[1.1] text-white">
            {slide.leftDescription}
          </h1>
          <Image
            src={slide.leftImageUrl}
            alt={"leftImage"}
            width={220}
            height={155}
            className="transform rotate-[-15deg] inline-block max-w-full align-middle"
          />
        </div>

        {/* Center column with T-shirt image */}
        <div className="flex justify-center items-center h-full">
          <Image
            src={slide.tshirtImageUrl}
            alt={slide.imageAltText}
            width={460}
            height={460}
            priority
          />
        </div>

        {/* Right column with flex layout */}
        <div className="flex flex-col justify-start items-start w-full gap-[40px]">
          {/* Nested flex layout for image and button */}
          <div className="flex flex-col justify-start items-start gap-[7px]">
            {/* Right image with rotation */}
            <Image
              src={slide.rightImageUrl}
              alt={"rightImage"}
              width={145}
              height={102}
              className="z-[1] object-scale-down transform rotate-[30deg] inline-block max-w-full align-middle relative"
            />

            {/* Button with scaling and transition */}
            <a
              href={slide.buttonUrl}
              target="_blank"
              className="bg-white rounded-full flex justify-center items-end px-[32px] py-[12px] text-[36px] leading-[1.1] hover:scale-90 hover:bg-orange hover:text-white transition-all duration-[100ms]"
            >
              {slide.buttonText}
            </a>
          </div>

          {/* Right description text styling */}
          <h2 className="text-left tracking-[0.035em] cursor-default font-[Monigue, sans-serif] text-[20px] font-normal text-white">
            {slide.rightDescription}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default DesktopSlide;

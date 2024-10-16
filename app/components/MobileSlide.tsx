/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { SlideContentType } from "../constants/SlidesContent";

const MobileSlide = (slide: SlideContentType) => {
  return (
    <div className="flex flex-col justify-start items-center gap-5 w-screen h-full mt-[80px] p-5 text-white">
      <div className="flex justify-center items-center w-full ">
        <Image
          src={slide.tshirtImageUrl}
          alt={slide.imageAltText}
          width={258}
          height={250}
        />
      </div>

      <div
        className={`flex justify-start items-center w-full gap-5 ${
          slide.className && slide.className
        }`}
      >
        <div className="w-1/2 flex flex-col justify-start items-start gap-5">
          <h1 className="text-left tracking-[0.035em] cursor-default font-monigue text-[16px] font-normal leading-4 text-white">
            {slide.leftDescription}
          </h1>
          <Image
            src={slide.leftImageUrl}
            alt={"leftImage"}
            width={120}
            height={85}
            className="transform rotate-[-15deg] inline-block max-w-full align-middle"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-start items-end gap-5">
          <div className="flex flex-col justify-start items-start gap-[7px]">
            <Image
              src={slide.rightImageUrl}
              alt={"rightImage"}
              width={100}
              height={70}
              className="z-[1] object-scale-down transform rotate-[30deg] inline-block max-w-full align-middle relative"
            />
            <a
              href={slide.buttonUrl}
              target="_blank"
              className="bg-white text-black rounded-full flex justify-center items-end px-[25px] pt-3 pb-[7px] text-[20px] leading-4 hover:scale-90 hover:bg-orange hover:text-white transition-all duration-[100ms]"
            >
              {slide.buttonText}
            </a>
          </div>
          <h2 className="text-left tracking-[0.035em] cursor-default font-[Monigue, sans-serif] text-[16px] font-normal text-white">
            {slide.rightDescription}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default MobileSlide;

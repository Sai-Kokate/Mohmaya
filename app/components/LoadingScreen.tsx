/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { CONFIG } from "../constants/config";

const LoadingScreen = (props: { progress: number; setSuccess: any }) => {
  const handleEnterButtonClick = (e: any) => {
    e.stopPropagation();
    props.setSuccess(true);
  };
  return (
    <div
      className="flex items-center justify-center h-screen w-screen font-monigue text-[18px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${CONFIG.STATIC_IMGAE_ASSETS_URL}/black-textured-background.avif)`,
      }}
    >
      {/* Outer container */}
      <div
        className="border-[3.5px] border-[var(--white)] w-[464px] h-[250px] bg-cover bg-center relative "
        style={{
          backgroundImage: `url(${CONFIG.STATIC_IMGAE_ASSETS_URL}/loading-page-loader-background.avif)`,
        }}
      >
        {/* Top section with logo and text */}
        <div className="flex w-full h-[163.5px]">
          {/* Left section: Mohmaya Logo */}
          <div className="flex items-center justify-center w-[50%]">
            <Image
              src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/mohmaya-key-name.svg`}
              alt="Mohmaya Logo"
              width={160}
              height={163.5}
            />
          </div>

          {/* Right section: Text and progress bar */}
          <div className="flex flex-col justify-start items-end w-[50%] p-[10px]">
            <div className="font-monigue text-[18px] tracking-[.035em] text-[var(--white)]">
              2024 Mohmaya Inc.
            </div>
            <div className="mt-[52px] flex flex-col justify-start items-end">
              {/* Progress bar container */}
              <div className="bg-white rounded-full w-[170px] h-[10px] p-[2px]">
                {/* Progress bar fill */}
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${props.progress}%`,
                    backgroundColor: "var(--orange)",
                    transition: "width 0.1s linear",
                  }}
                ></div>
              </div>
              {/* Updated styles for this div */}
              <div className="text-[var(--white)] mt-2 text-right tracking-[.04em] cursor-default text-[22px] leading-[1.1]">
                Timeless fashion takes a moment to arrive
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with globe, percentage, and button */}
        <div className="flex items-center justify-center w-full h-[76px] border-t-[3.5px] border-[var(--white)]">
          {/* Globe Icon */}
          <div className="flex items-center justify-center w-[88px] h-[76px] border-r-[3.5px] border-[var(--white)]">
            <Image
              src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/globe.svg`}
              alt="Globe"
              width={30}
              height={30}
            />
          </div>

          {/* Percentage loader */}
          <div className="flex items-center justify-center w-[137px] h-[76px] border-r-[3.5px] border-[var(--white)] text-[var(--white)] font-monigue text-[36px] leading-[0.8]">
            {props.progress}%
          </div>

          {/* Updated button styles */}
          <div className="flex items-center justify-center w-[228px] h-[76px]">
            <button
              className={`bg-white text-black w-[80%] h-[52px] px-[6px] py-[2px] rounded-full font-monigue text-[36px]  uppercase cursor-pointer shadow-[4px_7px_#cf4107] transition-all duration-[.35s]`}
              disabled={props.progress < 100}
              onClick={handleEnterButtonClick}
            >
              {props.progress < 100 ? "WAIT" : "ENTER"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

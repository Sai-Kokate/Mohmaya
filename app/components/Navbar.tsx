/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { CONFIG } from "../constants/config";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const pathname = usePathname();

  const handleClick = (e: any) => {
    e.preventDefault(); // Prevent immediate redirection
    setIsSpinning(true); // Trigger spin animation

    // Wait for the animation to finish (1s) before redirecting
    setTimeout(() => {
      window.open("https://shop.mohmaya.co/", "_blank");
      setIsSpinning(false);
    }, 1000); // Adjust this to match the animation duration
  };
  return (
    <>
      <div className="flex items-center justify-center h-[116px] w-screen font-monigue text-[18px] p-[30px] fixed top-0 tracking-[.035em] z-10">
        <div className="flex items-center justify-center h-[56px] w-[900px] bg-white p-[2px] rounded-[28px] ">
          <div className="flex items-center justify-center w-[185px] ">
            <Link href="/">
              <Image
                src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/mohmaya-logo.svg`}
                alt="Mohmaya Logo"
                width={85}
                height={12}
              />
            </Link>
          </div>
          <div className="w-[3px] h-[100%] bg-[#e0e0e0]" />
          <div className="flex items-center justify-center w-[138px] h-[56px] font-monigue">
            <Link
              href="/about"
              className={`transition-colors duration-300 tracking-[.035em] ${
                pathname === "/about"
                  ? "text-[var(--orange)]"
                  : "hover:text-[var(--orange)]"
              }`}
            >
              ABOUT
            </Link>
          </div>
          <div className="w-[3px] h-[100%] bg-[#e0e0e0]" />
          <div className="flex items-center justify-center w-[152px] h-[56px] font-monigue">
            <Link
              href="/contact"
              className={`transition-colors duration-300 tracking-[.035em] ${
                pathname === "/contact"
                  ? "text-[var(--orange)]"
                  : "hover:text-[var(--orange)]"
              }`}
            >
              CONTACT
            </Link>
          </div>
          <div className="w-[3px] h-[100%] bg-[#e0e0e0]" />
          <div className="flex items-center justify-center w-[168px] h-[56px] font-monigue">
            <a
              href="https://www.instagram.com/mohmaya.co_/?hl=en"
              target="_blank"
              className="hover:text-[var(--orange)] transition-colors duration-300  tracking-[.035em]"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="w-[3px] h-[100%] bg-[#e0e0e0]" />
          <div className="flex items-center justify-end w-[238px] h-[56px] font-monigue p-[3px 5px 3px 0px] text-white text-[24px]">
            <a
              href="https://shop.mohmaya.co/"
              target="_blank"
              className="w-[174px] h-[46px] pt-[5px] pr-[6px] pb-[5px] pl-[6px] flex justify-start items-center bg-orange rounded-[28px] gap-[20px] transition-transform duration-50 hover:scale-90 text-[24px]"
            >
              <div>
                <Image
                  src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/globe.svg`}
                  alt="Globe"
                  width={30}
                  height={30}
                />
              </div>
              <div className=" tracking-[.035em]">VIEW STORE</div>
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://shop.mohmaya.co/"
        target="_blank"
        className="fixed bottom-[15px] right-[35px] flex items-center justify-center w-[30px] h-[55px] cursor-pointer z-10"
        onClick={handleClick}
      >
        <Image
          src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/mohmaya-key.png`}
          alt="Globe"
          width={30}
          height={55}
          className={`${isSpinning ? "animate-spin" : ""}`}
        />
      </a>
    </>
  );
};

export default Navbar;

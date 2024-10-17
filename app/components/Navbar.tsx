/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { CONFIG } from "../constants/config";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isMobile?: boolean;
}

const Navbar = ({ isMobile = false }: NavbarProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle mobile menu visibility
  };

  return (
    <>
      {!isMobile ? (
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
                    src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/globe.webp`}
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
      ) : (
        // Mobile menu
        <div className="fixed top-0 left-0 w-full flex flex-col items-center justify-center z-20">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="absolute bg-orange  top-5 transition-all duration-100 ease-in-out h-10 w-10 p-1 rounded-[6px] "
          >
            {isOpen ? (
              <X color="white" width={"auto"} height={"auto"} /> // Cross icon when menu is open
            ) : (
              <Menu color="white" width={"auto"} height={"auto"} /> // Hamburger icon when menu is closed
            )}
          </button>
          {isOpen && (
            <div className="flex flex-col gap-[10px] bg-white border border-gray-300 rounded-lg p-[10px] h-auto w-auto  absolute top-20">
              <div className="flex items-center justify-center w-[164px] p-[10px] h-9">
                <Link href="/" className="p-0">
                  <Image
                    src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/mohmaya-logo.svg`}
                    alt="Mohmaya Logo"
                    width={85}
                    height={12}
                  />
                </Link>
              </div>
              <Link
                href="/about"
                className={`flex items-center justify-center font-monigue p-[10px] h-9 ${
                  pathname === "/about"
                    ? "text-[var(--orange)]"
                    : "hover:text-[var(--orange)]"
                }`}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className={`flex items-center justify-center font-monigue h-9 p-[10px] ${
                  pathname === "/contact"
                    ? "text-[var(--orange)]"
                    : "hover:text-[var(--orange)]"
                }`}
              >
                CONTACT
              </Link>
              <a
                href="https://www.instagram.com/mohmaya.co_/?hl=en"
                target="_blank"
                className="flex items-center justify-center font-monigue h-9 p-[10px]"
              >
                INSTAGRAM
              </a>
              <button
                onClick={handleClick}
                className="pt-[5px] pr-[6px] pb-[5px] pl-[6px] flex justify-start items-center gap-5 bg-orange text-white w-full py-2 rounded-lg transition-transform duration-300 hover:scale-95"
              >
                <div>
                  <Image
                    src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/globe.webp`}
                    alt="Globe"
                    width={30}
                    height={30}
                  />
                </div>
                VIEW STORE
              </button>
            </div>
          )}
        </div>
      )}

      {!isMobile && (
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
      )}
    </>
  );
};

export default Navbar;

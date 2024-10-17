import Image from "next/image";
import { CONFIG } from "../constants/config";
import Navbar from "./Navbar";
import TShirtCarousel from "./TShirtCarousel";

interface HomeScreenProps {
  isMobile?: boolean;
}

const HomeScreen = ({ isMobile = false }: HomeScreenProps) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen font-monigue text-[18px] bg-cover bg-center relative bg-[#1A1A1A]">
      <Image
        src={CONFIG.STATIC_IMGAE_ASSETS_URL + "/tshirt-slide-background.webp"}
        alt={"tshirt-slide-background"}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
        priority
      />
      <Navbar isMobile={isMobile} />
      <div className="flex-grow flex items-center justify-center w-full h-screen">
        <TShirtCarousel isMobile={isMobile} />
      </div>
    </div>
  );
};

export default HomeScreen;

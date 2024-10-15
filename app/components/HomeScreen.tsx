import { CONFIG } from "../constants/config";
import Navbar from "./Navbar";
import TShirtCarousel from "./TShirtCarousel";

const HomeScreen = () => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen font-monigue text-[18px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-slide-background.webp)`,
      }}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-center w-full h-screen">
        <TShirtCarousel />
      </div>
    </div>
  );
};

export default HomeScreen;

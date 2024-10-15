import Image from "next/image";
import Navbar from "../components/Navbar";
import { CONFIG } from "../constants/config";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen font-monigue text-[18px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-slide-background.webp)`,
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1200px] grid grid-cols-[.6fr_1fr_.6fr] grid-rows-auto auto-cols-[1fr] place-items-center gap-[50px] w-full">
          <div className="flex flex-col justify-end items-end w-full gap-[25px]">
            <Image
              src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/combined-asset.png`}
              alt={"leftImage"}
              width={257}
              height={316}
              className="inline-block max-w-full align-middle"
            />
          </div>

          <div className="flex flex-col justify-center items-start h-full gap-[25px] text-white">
            <h1 className="text-orange font-monigue text-[40px] tracking-[.04em] leading-[1.1]">
              about us
            </h1>
            <div className="font-monigue text-[20px] tracking-[.04em] leading-5 ">
              <span className="text-orange">Mohmaya</span> was born from a
              desire to reclaim streetwear’s origins. Before it became just
              &ldquo;oversized tees&rdquo; and a flood of imitation, streetwear
              was a voice for the unheard—a canvas for artists to channel the
              frustrations and truths of the people. While high fashion pandered
              to the elite, streetwear took the simplest of garments and used
              them to provoke thought and disrupt the status quo.
              <br />
              <br />
              We’re not just creating clothes—we’re crafting a narrative. A
              story that goes beyond the tired clichés of baggy pants and
              oversized tees. Mohmaya is about bold expression and the
              unapologetic pursuit of what’s real. Or maybe it’s all just
              maya—an illusion. The choice is yours.
              <br />
              <br />
              In a world of illusions, Mohmaya stands as a beacon of
              authenticity. When everything feels like a façade, the bravest
              thing you can do is wear your heart on your sleeve—literally. This
              is for the headstrong, the rebels, the misfits. Own your truth.
            </div>
            <Link href="/">
              <span>&lt; Back to Shop</span>
            </Link>
          </div>

          <div className="flex flex-col justify-start items-start w-full gap-[40px]">
            <Image
              src={`${CONFIG.STATIC_IMGAE_ASSETS_URL}/combined-asset.png`}
              alt={"leftImage"}
              width={257}
              height={316}
              className="inline-block max-w-full align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

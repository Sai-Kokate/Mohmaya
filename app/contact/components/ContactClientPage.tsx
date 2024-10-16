import Navbar from "../../components/Navbar";
import { CONFIG } from "../../constants/config";
import Link from "next/link";
import ContactUsForm from "./ContactUsForm";

interface ContactClientPageProps {
  isMobile?: boolean;
}

const ContactClientPage = ({ isMobile = false }: ContactClientPageProps) => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen font-monigue text-[18px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-slide-background.webp)`,
      }}
    >
      <Navbar isMobile={isMobile} />
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex flex-col justify-center items-start h-full gap-[40px] text-white w-full max-w-[430px] p-5">
          <h1 className="text-orange font-monigue text-[40px] tracking-[.04em] leading-[1.1]">
            contact us.
          </h1>
          <div className="w-full">
            <ContactUsForm />
          </div>
          <Link href="/">
            <span>&lt; Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactClientPage;

import { headers } from "next/headers";
import ContactClientPage from "./components/ContactClientPage";

export default function Contact() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /Mobi|Android|iPhone|IEMobile|Opera Mini/i.test(userAgent);

  return <ContactClientPage isMobile={isMobile} />;
}

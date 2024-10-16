import { headers } from "next/headers";
import AboutClientPage from "./AboutClientPage";

export default function About() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /Mobi|Android|iPhone|IEMobile|Opera Mini/i.test(userAgent);

  return <AboutClientPage isMobile={isMobile} />;
}

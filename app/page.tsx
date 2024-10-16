import { headers } from "next/headers";
import ClientHome from "./components/ClientHome";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /Mobi|Android|iPhone|IEMobile|Opera Mini/i.test(userAgent);

  // Check for the cookie 'animationPlayed'
  const cookies = headersList.get("cookie") || "";
  const animationPlayed = cookies
    .split("; ")
    .find((row) => row.startsWith("animationPlayed="));
  const hasAnimationPlayed = animationPlayed
    ? animationPlayed.split("=")[1] === "true"
    : false;
  return (
    <ClientHome isMobile={isMobile} hasAnimationPlayed={hasAnimationPlayed} />
  );
}

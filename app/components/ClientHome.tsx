"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import HomeScreen from "./HomeScreen";

interface HomeProps {
  isMobile?: boolean;
  hasAnimationPlayed?: boolean;
}

export default function Home({
  isMobile = false,
  hasAnimationPlayed,
}: HomeProps) {
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(hasAnimationPlayed);

  // Progress bar logic
  useEffect(() => {
    if (!success) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return oldProgress + 1; // Increase by 1 every time
        });
      }, 50); // Updates every 50ms, completing in 5 seconds
      return () => clearInterval(interval);
    }
  }, [success]);

  return !success ? (
    <LoadingScreen
      progress={progress}
      setSuccess={setSuccess}
      isMobile={isMobile}
    />
  ) : (
    <HomeScreen isMobile={isMobile} />
  );
}

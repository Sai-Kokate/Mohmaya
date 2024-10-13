"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomeScreen from "./components/HomeScreen";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  // Progress bar logic
  useEffect(() => {
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
  }, []);

  return !success ? (
    <LoadingScreen progress={progress} setSuccess={setSuccess} />
  ) : (
    <HomeScreen />
  );
}

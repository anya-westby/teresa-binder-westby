import { useState, useEffect } from "react";

export default function useWindow() {
  const [windowDimensions, setWindowDimensions] = useState<{
    windowWidth: number | null;
    windowHeight: number | null;
  }>({
    windowWidth: null,
    windowHeight: null,
  });

  useEffect(() => {
    // For Gatsby compatibility
    if (window === undefined) return;

    const handleResize = () => {
      setWindowDimensions({
        windowWidth: document.documentElement.clientWidth,
        windowHeight: document.documentElement.clientHeight,
      });
      document.documentElement.style.setProperty(
        "--vw",
        document.documentElement.clientWidth + "px"
      );
      document.documentElement.style.setProperty(
        "--vh",
        document.documentElement.clientHeight + "px"
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

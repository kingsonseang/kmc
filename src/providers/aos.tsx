"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once
      easing: "ease-in-out",
    });
  }, []);

  return children;
};

export { AOSProvider };

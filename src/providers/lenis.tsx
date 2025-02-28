"use client";

import React from "react";
import Lenis from "lenis";

const LenisProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return children;
};

export { LenisProvider };

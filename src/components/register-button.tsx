"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function RegisterButton() {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);
    router.push("/register" as string);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      onClick={handleTransition}
      className='flex space-x-2 p-1'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ x: isHovered ? 56 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className='z-10'
      >
        <Button className='h-12 hover:bg-primary'>
          <span>Register</span>
        </Button>
      </motion.div>

      <motion.div
        animate={{ x: isHovered ? -124 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Button className='h-12 border border-white md:border-primary text-white md:text-primary bg-transparent px-4 hover:bg-transparent'>
          <ArrowRight />
        </Button>
      </motion.div>
    </motion.a>
  );
}

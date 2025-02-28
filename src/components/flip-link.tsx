"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { LinkProps } from "next/link";
import { cn } from "@/utilities/ui";

const DURATION = 0.25;

const STAGGER = 0.025;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface FlipLinkProps extends LinkProps, React.PropsWithChildren {
  className?: string;
}

export const FlipLink: React.FC<FlipLinkProps> = ({
  children,
  href,
  className,
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);
    router.push(href as string);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      onClick={handleTransition}
      href={href as string}
      className={cn(
        "relative block overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <div>
        <motion.span
          variants={{
            initial: {
              y: 0,
            },

            hovered: {
              y: "-100%",
            },
          }}
          transition={{
            duration: DURATION,

            ease: "easeInOut",
          }}
          className='inline-block'
        >
          {children}
        </motion.span>
      </div>

      <div className='absolute inset-0'>
        <motion.span
          variants={{
            initial: {
              y: "100%",
            },

            hovered: {
              y: 0,
            },
          }}
          transition={{
            duration: DURATION,

            ease: "easeInOut",
          }}
          className='inline-block'
        >
          {children}
        </motion.span>
      </div>
    </motion.a>
  );
};
FlipLink.displayName = "FlipLink";

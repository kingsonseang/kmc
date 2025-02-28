"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/dark.png";
import logodark from "public/logo/light.png";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/utilities/ui";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FlipLink } from "../flip-link";
import { TransitionLink } from "../transition-link";

{
  /* <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isPastHero ? 0 : -100, opacity: isPastHero ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn("top-0 left-0 right-0 z-10 transition-all duration-300", {
        "pt-4 absolute": !isPastHero,
        "fixed bg-white/10 backdrop-blur-md": isPastHero,
      })}
    ></motion.header> */
}

export function Header() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn("top-0 left-0 right-0 z-10 transition-all duration-300", {
        "pt-4 absolute": !isPastHero,
        "fixed bg-white/10 backdrop-blur-md": isPastHero,
      })}
    >
      <div className='flex items-center justify-between max-w-screen-2xl mx-auto p-4 sm:px-6'>
        <TransitionLink href='/' className='shrink-0'>
          <Image
            src={!isPastHero ? logodark : logo}
            alt='Logo'
            width={200}
            height={50}
            className='h-11 w-auto object-left'
          />
        </TransitionLink>

        <nav className='lg:flex gap-x-5 hidden'>
          {links.map((link, index) => (
            <FlipLink
              key={index}
              href={link.url}
              className={cn({
                "text-black": pathname === link.url && !isPastHero,
                "text-primary": pathname === link.url && isPastHero,
                "text-black/50": pathname !== link.url,
              })}
            >
              {link.label}
            </FlipLink>
          ))}
        </nav>

        {!isDesktop && (
          <div className='lg:hidden'>
            <Drawer direction='right'>
              <DrawerTrigger>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={cn("size-6", {
                    "text-black": !isPastHero,
                    "text-secondary": isPastHero,
                  })}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 9h16.5m-16.5 6.75h16.5'
                  />
                </svg>
              </DrawerTrigger>
              <DrawerContent>
                <div className='py-4 text-2xl text-secondary text-center flex flex-col justify-center items-center gap-6 h-full'>
                  {links.map((link, index) => (
                    <DrawerClose asChild key={index}>
                      <Link href={link.url}>{link.label}</Link>
                    </DrawerClose>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        )}
      </div>
    </header>
  );
}

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/#about",
  },
  {
    label: "Register",
    url: "/register",
  },
  {
    label: "Sponsorship",
    url: "/sponsor",
  },
  {
    label: "Volunteer",
    url: "/volunteer",
  },
  {
    label: "Contact us",
    url: "/#footer",
  },
];

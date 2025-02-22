"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/dark.png";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className='fixed top-0 left-0 right-0 z-10 backdrop-blur-md'>
      <div className='flex items-center justify-between max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8'>
        <Link href='/' data-aos='fade-right'>
          <Image src={logo} alt='Logo' width={200} height={50} />
        </Link>

        <nav className='lg:flex gap-x-5 text-secondary hidden mix-blend-difference'>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              data-aos='fade-left'
              data-aos-delay={`${index + 1}00`}
            >
              {link.label}
            </Link>
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
                  className='size-6 text-secondary'
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

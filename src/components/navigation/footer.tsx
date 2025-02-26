import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/primary.png";
import { FlipLink } from "../flip-link";
import { Separator } from "../separator";

export function Footer() {
  return (
    <footer id='footer'>
      <Separator />
      <div className='max-w-screen-2xl mx-auto p-4 lg:py-12'>
        <div className='flex flex-col lg:grid grid-cols-7 gap-8'>
          <div className='space-y-4 col-span-2'>
            <div>
              <Link href='/'>
                <Image src={logo} alt='Logo' width={200} height={50} />
              </Link>
            </div>
          </div>

          <div className='col-start-4 flex flex-col gap-6 md:grid grid-cols-3 col-span-3'>
            {navLinks.map((item, index) => (
              <div key={index} className='space-y-4'>
                <p className='opacity-70 cursor-default'>{item.label}</p>

                <ul className='space-y-2'>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <FlipLink href={link.url}>{link.label}</FlipLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator />
      <div className='px-4 py-6'>
        <div className='max-w-screen-2xl mx-auto text-xs text-left md:text-center lg:text-base opacity-70'>
          © Kingdom Millionaire Convention {new Date().getFullYear()}, All
          rights reserverd.
        </div>
      </div>
    </footer>
  );
}

const navLinks = [
  {
    label: "Home",
    links: [
      {
        label: "Agenda",
        url: "/#about",
      },
      {
        label: "Schedule",
        url: "/#schedule",
      },
    ],
  },
  {
    label: "Event",
    links: [
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
    ],
  },
  {
    label: "Contact & Enquiries",
    links: [
      {
        label: "Email",
        url: "mailto:info@kingdommillionairesconvention.com",
      },
      {
        label: "Phone",
        url: "tel:+2348165708803",
      },
    ],
  },
];

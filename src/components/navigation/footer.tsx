import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/primary.png";

export function Footer() {
  return (
    <footer className='border-t border-secondary'>
      <div className='max-w-screen-2xl mx-auto p-4  lg:py-12'>
        <div className='flex flex-col lg:grid grid-cols-4 gap-8'>
          <div className='prose'>
            <Link href='/'>
              <Image src={logo} alt='Logo' width={200} height={50} />
            </Link>
            <p className='opacity-70'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequatur nulla libero sunt ut debitis quod obcaecati dolorum,
              ullam tempore fugit.
            </p>
          </div>

          <div className='col-start-3 flex flex-col gap-6 md:grid grid-cols-3 col-span-3'>
            {navLinks.map((item, index) => (
              <div key={index} className='space-y-4'>
                <p className='opacity-70 cursor-default'>{item.label}</p>

                <ul className='space-y-2'>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-secondary p-4'>
        <div className='max-w-screen-2xl mx-auto text-center text-sm lg:text-base'>
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
        url: "#",
      },
      {
        label: "Schedule",
        url: "#",
      },
    ],
  },
  {
    label: "Event",
    links: [
      {
        label: "Sponsorship",
        url: "#",
      },
      {
        label: "Volunteer",
        url: "#",
      },
    ],
  },
  {
    label: "Contact & Enquiries",
    links: [
      {
        label: "Email",
        url: "#",
      },
      {
        label: "Call us",
        url: "#",
      },
    ],
  },
];

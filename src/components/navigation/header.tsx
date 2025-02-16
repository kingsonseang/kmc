import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/dark.png";

export function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-10 backdrop-blur-md'>
      <div className='flex items-center justify-between max-w-screen-2xl mx-auto p-4 pt-6'>
        <Link href='/'>
          <Image src={logo} alt='Logo' width={200} height={50} />
        </Link>

        <nav className='flex gap-x-5 text-white'>
          <Link href='#about'>About</Link>
          <Link href='#schedule'>Schedule</Link>
          <Link href='#'>Contact us</Link>
        </nav>
      </div>
    </header>
  );
}

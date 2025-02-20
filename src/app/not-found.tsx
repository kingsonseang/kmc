import { Button } from "@/components/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className='h-dvh flex justify-center items-center p-4'>
      <div className='prose text-center'>
        <h1>Page not found</h1>
        <Button asChild>
          <Link href='/' className='no-underline'>
            Go to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}

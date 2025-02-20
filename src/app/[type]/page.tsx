import { notFound } from "next/navigation";
import Data from "./data.json";
import { PageClient } from "./page.client";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
export default async function Register(props: {
  params: Promise<{ type: string }>;
}) {
  const pagetype = await (await props.params).type;

  const page = Data.find((page) => page?.type === pagetype);

  if (!page) notFound();

  return (
    <main className='min-h-dvh px-4 pt-24 pb-12 max-w-screen-md mx-auto prose'>
      <div>
        <div>
          <h2>
            <Balancer>{page.title}</Balancer>
          </h2>
          <p>{page.description}</p>
        </div>

        <div className='space-y-8'>
          <PageClient collection={page.type as any} />
          <Image
            src='https://cms.straqa.com/api/media/file/straqa-powered-by-dark.png'
            alt='powered by straqa'
            width={200}
            height={200}
            className='object-contain object-center w-28'
          />
        </div>
      </div>
    </main>
  );
}

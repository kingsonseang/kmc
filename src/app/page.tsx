import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/accordion";
import { RegisterButton } from "@/components/register-button";
import speakers from "./speakers.json";
import { TextMarquee } from "@/components/text-marquee";
import { cn } from "@/utilities/ui";

export default function Home() {
  return (
    <article className='w-screen'>
      <div className='relative h-dvh'>
        <div className='grid md:grid-cols-2 gap-8 h-full relative'>
          <div className='hidden md:block'></div>
          <div className='relative'>
            <Image
              src='/assets/hero.jpeg'
              alt=''
              // width={400}
              // height={600}
              className='object-cover w-full h-full z-0 object-top'
              fill
            />

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-70% to-primary z-[1]'></div>
          </div>
          <div className='z-[3] absolute md:top-0 left-0 right-0 bottom-0 md:h-full w-full grid md:grid-cols-2 gap-8 max-w-screen-2xl mx-auto text-white md:text-black'>
            <div className='pt-32 xl:pt-72 pb-24 xl:pb-44'>
              <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 prose md:prose-base xl:prose-md'>
                <p className='opacity-70'>
                  Kingdom Millionaires Convention 2025.
                </p>
                <h1
                  className='md:bg-gradient-to-br from-black/60 via-accent-foreground to-black bg-clip-text md:text-transparent drop-shadow-sm'
                  style={{
                    animationDelay: "0.20s",
                    animationFillMode: "forwards",
                  }}
                >
                  <Balancer>
                    A GATHERING OF KINGDOM FINANCIERS, CULTURE SHAPERS, & CHANGE
                    MARKERS.
                  </Balancer>
                </h1>
                <div
                  className='flex items-center gap-8 not-prose pt-4'
                  data-aos='fade-up'
                  data-aos-delay='400'
                  data-aos-anchor-placement='center-bottom'
                >
                  <div>
                    <p className='text-lg lg:text-xl xl:text-2xl'>
                      14th June, 2025
                    </p>
                    <p className='opacity-70'>8am - 6pm</p>
                  </div>

                  <RegisterButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TextMarquee
          className='absolute bottom-0 left-0 right-0 w-screen'
          array={[
            { text: "14th June, 2025" },
            { text: "8am - 6pm" },
            // { text: "Heavens Garden Palace" },
          ]}
        />
      </div>

      <div id='about' className='pt-16 scroll-m-6'>
        <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8 xl:space-y-12'>
          <div className='grid lg:grid-cols-2 lg:gap-16'>
            <div className='space-y-3'>
              <p className='uppercase text-secondary' data-aos='fade-down'>
                About
              </p>
              <div className='prose text-black/80 prose-headings:font-light'>
                <h3>
                  The{" "}
                  <span className='text-black font-medium'>
                    Kingdom Millionaire Convention
                  </span>{" "}
                  is a groundbreaking event designed to empower the Joshua
                  Generation with tools, insights, and inspiration to achieve
                  Financial Dominion, Marketplace Infiltration, and Position as
                  Kingdom Financiers.
                </h3>
              </div>
            </div>
            <div className='pt-9 prose'>
              <p className='opacity-80'>
                At this revolutionary gathering, participants discover that
                kingdom success encompasses both spiritual depth and financial
                acumen.
              </p>
              <p>
                The convention proves that one can be Rich In Christ and be Rich
                In Cash simultaneously, breaking the myth that godliness and
                wealth are mutually exclusive.
              </p>
              <p>
                The Ambassadors present will engage with industry experts,
                renowned speakers, and seasoned entrepreneurs who share
                innovative strategies for wealth creation and marketplace
                intelligence.
              </p>
            </div>
          </div>

          <div className='relative aspect-video lg:aspect-[16_/_6] rounded-3xl overflow-clip'>
            <Image
              src='/assets/about.jpg'
              alt=''
              className='object-cover w-full h-full'
              fill
            />
          </div>
        </div>
      </div>

      <div id='about' className='pt-16 scroll-m-6'>
        <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8 xl:space-y-12'>
          <div className='space-y-3'>
            <p className='uppercase text-secondary' data-aos='fade-down'>
              What to Expect
            </p>
            <div className='prose'>
              <h1>The convention will feature:</h1>
            </div>
          </div>
          <div className='grid lg:grid-cols-4 gap-4'>
            {[
              {
                title: "Powerful Keynote Sessions",
                description:
                  "Delivered by industry leaders and kingdom-minded professionals",
              },
              {
                title: "Interactive Panel Discussions",
                description:
                  "Focused on practical strategies for financial growth and marketplaceinfluence.",
              },
              {
                title: "Prophetic Sounds and Worship",
                description:
                  "A transformative closing session to inspire and empower attendees.",
              },
              {
                title: "Networking Opportunities",
                description:
                  "Connect with like-minded individuals and leaders in the faith and business community.",
              },
            ].map((item, index) => (
              <div key={index} className='lg:grid grid-rows-6'>
                <div
                  className={cn(
                    "bg-[url(/assets/card.svg)] row-span-5 bg-cover px-4 py-5 aspect-[1.5/1] text-gray-1300 flex flex-col justify-between",
                    index % 2 === 0 ? "row-start-1" : "row-start-2",
                    "lg:hover:-translate-y-3 transition ease-linear duration-300 invert-0 hover:invert ring-1 ring-black/50 rounded-3xl"
                  )}
                >
                  {
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='60'
                      height='60'
                      viewBox='0 0 60 60'
                      fill='none'
                      className='size-9'
                    >
                      <g clipPath='url(#clip0_139_19)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M31 29V0H29V29H0V31H29V60H31V31H60V29H31ZM22 20V9H20V20H10V22H22V21V20ZM37 9V20V21V22H49V20H39V9H37ZM37 37V48H39V37H49V35H37V36V37ZM22 37V48H20V37H10V35H22V36V37Z'
                          fill='black'
                        ></path>
                      </g>
                      <defs>
                        <clipPath id='clip0_139_19'>
                          <rect width='60' height='60' fill='black'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  }

                  <div className=' space-y-1'>
                    <h4 className='font-medium'>{item.title}</h4>
                    <p className='opacity-80 text-sm'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id='speakers' className='pt-16 scroll-m-6'>
        <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8'>
          <div className='prose uppercase text-secondary'>
            <p data-aos='fade-down'>Speakers</p>
          </div>
          <div className='grid gap-5 lg:grid-cols-2'>
            <div className='prose'>
              <h1 data-aos='fade-up'>Meet our 2025 Speakers</h1>
            </div>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {speakers.map((speakers, index) => (
              <div
                key={index}
                className='space-y-3'
                data-aos='fade-up'
                data-aos-delay={`${index + 2}00`}
              >
                <div className='overflow-clip rounded-3xl'>
                  <Image
                    src={`/assets/speakers/${speakers.name}.jpg`}
                    alt={speakers.name}
                    width={400}
                    height={600}
                    className='aspect-[1/1.2] object-cover'
                  />
                </div>
                <div className='text-left'>
                  <p className='text-lg'>{speakers.name}</p>
                  <p className='text-sm opacity-70'>{speakers.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id='schedule' className='pt-16 scroll-m-6'>
        <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8'>
          <p className='uppercase text-secondary' data-aos='fade-down'>
            Schedule
          </p>
          <div className='grid gap-5 lg:grid-cols-2'>
            <div className='prose'>
              <h1 data-aos='fade-up'>Schedule And Agenda</h1>
              {/* <p data-aos='fade-up' data-aos-delay='200'>
                
              </p> */}
            </div>
            <div className='grid gap-8'>
              <p className='opacity-70' data-aos='fade-up' data-aos-delay='200'>
                Check back for the updated schedule.
              </p>
              {/* {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className='flex gap-5'
                  data-aos='fade-up'
                  data-aos-delay={`${index + 1}00`}
                >
                  <div>
                    <span className='text-stone-500 font-medium text-sm lg:text-base'>
                      8AM-10AM
                    </span>
                  </div>
                  <div>
                    <p className='text-2xl'>Event Check-in</p>
                    <Balancer className='opacity-70'>
                      Our team will be available to assist you with any
                      questions and ensure you are ready for the exciting days
                      ahead. event check-in starts at 8:00 AM.
                    </Balancer>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <div className='py-16'>
        {/* <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8'>
          <p className='uppercase text-secondary' data-aos='fade-down'>
            faq&apos;s
          </p>
          <div className='grid gap-5 lg:grid-cols-2'>
            <div className='prose'>
              <h2 data-aos='fade-up'>Frequently Asked Question</h2>
              <p data-aos='fade-up' data-aos-delay='200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus facere porro id rem aut unde earum fugiat est
                perspiciatis, nemo aliquid voluptate corporis ipsum ratione
                consectetur, beatae accusamus praesentium ad?
              </p>
            </div>
            <Accordion type='single' collapsible className='w-full'>
              {Array.from({ length: 3 }).map((_, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  data-aos='fade-up'
                  data-aos-delay={`${index + 1}00`}
                >
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div> */}
      </div>
    </article>
  );
}

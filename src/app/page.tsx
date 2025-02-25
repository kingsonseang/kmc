import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/accordion";
import { Button } from "@/components/button";
import speakers from "./speakers.json";

export default function Home() {
  return (
    <article className='w-screen'>
      <div className='bg-[url(/assets/hero.png)] bg-fixed'>
        <div className='bg-gradient-to-r from-primary/30 to-60% to-transparent pt-32 xl:pt-72 pb-12 xl:pb-44'>
          <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 prose md:prose-base xl:prose-md text-white'>
            <p data-aos='fade-down'>Kingdom Millionaires Convention 2025.</p>
            <h1 className=' text-white' data-aos='fade-up' data-aos-delay='200'>
              <Balancer>
                A GATHERING OF KINGDOM FINANCIERS, CULTURE SHAPERS, & CHANGE
                MARKERS.
              </Balancer>
            </h1>
            <div
              className='flex gap-8 not-prose pt-4'
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

              <div className='prose'>
                <Button asChild>
                  <Link href='/register'>Register</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='about' className='pt-16 scroll-m-6'>
        <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8'>
          <p className='uppercase text-secondary' data-aos='fade-down'>
            About
          </p>
          <div className='grid gap-5 lg:grid-cols-2'>
            <div className='prose'>
              <h2 data-aos='fade-up'>About the event</h2>
              <p className='opacity-80' data-aos='fade-up' data-aos-delay='200'>
                The Kingdom Millionaire Convention is a groundbreaking event
                designed to empower the Joshua Generation with tools, insights,
                and inspiration to achieve Financial Dominion, Marketplace
                Infiltration, and Position as Kingdom Financiers.
                <br />
                <br />
                At this revolutionary gathering, participants discover that
                kingdom success encompasses both spiritual depth and financial
                acumen.
                <br />
                <br />
                The convention proves that one can be Rich In Christ and be Rich
                In Cash simultaneously, breaking the myth that godliness and
                wealth are mutually exclusive.
                <br />
                <br />
                The Ambassadors present will engage with industry experts,
                renowned speakers, and seasoned entrepreneurs who share
                innovative strategies for wealth creation and marketplace
                intelligence.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div
                data-aos='fade-up'
                className='flex flex-col space-y-6 lg:space-y-8'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='60'
                  height='60'
                  viewBox='0 0 60 60'
                  fill='none'
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

                <div className='space-y-2'>
                  <p className='text-2xl'>Agenda</p>
                  <p className='opacity-80'>
                    Create a LOUD awareness about the Joshua Generation and
                    showcase the possibility of being extremely RICH & GODLY.
                  </p>
                </div>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                className='flex flex-col space-y-6 lg:space-y-8'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='62'
                  height='61'
                  viewBox='0 0 62 61'
                  fill='none'
                >
                  <g clipPath='url(#clip0_139_22)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M27 8.5V26.5C27 30.0898 24.0899 33 20.5 33C16.9102 33 14 30.0899 14 26.5V8.5C14 4.91015 16.9102 2 20.5 2C24.0899 2 27 4.91015 27 8.5ZM12 8.5C12 3.80558 15.8056 0 20.5 0C25.1944 0 29 3.80558 29 8.5V26.5C29 31.1944 25.1944 35 20.5 35C15.8056 35 12 31.1944 12 26.5V8.5ZM41.5 22C44.5376 22 47 19.5376 47 16.5C47 13.4624 44.5376 11 41.5 11C38.4624 11 36 13.4624 36 16.5C36 19.5376 38.4624 22 41.5 22ZM41.5 24C45.6421 24 49 20.6421 49 16.5C49 12.3579 45.6421 9 41.5 9C37.3579 9 34 12.3579 34 16.5C34 20.6421 37.3579 24 41.5 24ZM42.8632 58.6403C39.1021 60.1982 35.071 61 31 61C26.929 61 22.8979 60.1982 19.1368 58.6403C15.3757 57.0824 11.9583 54.7989 9.07968 51.9203C6.20107 49.0417 3.91763 45.6243 2.35973 41.8632C0.801836 38.1021 0 34.071 0 30V29H0.999999H7.5V31H2.01725C2.13687 34.4672 2.87779 37.8876 4.20749 41.0978C5.66487 44.6163 7.801 47.8132 10.4939 50.5061C13.1868 53.199 16.3837 55.3351 19.9022 56.7925C23.4206 58.2499 27.1917 59 31 59C34.8083 59 38.5794 58.2499 42.0978 56.7925C45.6163 55.3351 48.8132 53.199 51.5061 50.5061C54.199 47.8132 56.3351 44.6163 57.7925 41.0978C59.1222 37.8877 59.8631 34.4672 59.9828 31H33.5V29H61H62V30C62 34.071 61.1982 38.1021 59.6403 41.8632C58.0824 45.6243 55.7989 49.0417 52.9203 51.9203C50.0417 54.7989 46.6243 57.0824 42.8632 58.6403Z'
                      fill='black'
                    ></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_139_22'>
                      <rect width='62' height='61' fill='black'></rect>
                    </clipPath>
                  </defs>
                </svg>

                <div className='space-y-2'>
                  <p className='text-2xl'>Objective</p>
                  <p className='opacity-80'>
                    For everyone who will attend this event will be tooled up
                    with the right information for total Financial Dominion and
                    marketplace infiltration.
                  </p>
                </div>
              </div>
            </div>
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
              <h2 data-aos='fade-up'>Meet our 2025 Speakers</h2>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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

          <Button asChild data-aos='fade-up' data-aos-delay='200'>
            <Link href='mailto:info@kingdommillionairesconvention.com'>
              Apply to speak
            </Link>
          </Button>
        </div>
      </div>

      <div id='schedule' className='pt-16 scroll-m-6'>
        <div className='max-w-screen-2xl mx-auto p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 lg:space-y-8'>
          <p className='uppercase text-secondary' data-aos='fade-down'>
            Schedule
          </p>
          <div className='grid gap-5 lg:grid-cols-2'>
            <div className='prose'>
              <h2 data-aos='fade-up'>Schedule And Agenda</h2>
              {/* <p data-aos='fade-up' data-aos-delay='200'>
                
              </p> */}
            </div>
            <div className='grid gap-8'>
              <p data-aos='fade-up' data-aos-delay='200'>
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

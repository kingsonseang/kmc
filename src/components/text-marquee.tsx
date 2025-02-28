"use client";

import * as React from "react";
import { cn } from "@/utilities/ui";
import Marquee from "react-fast-marquee";

export function TextMarquee(props: {
  array?: {
    text: string;
  }[];
  className?: string;
}) {
  if (!props.array || props.array === null) {
    return null;
  }

  const array: typeof props.array = [];

  props.array.forEach((item, index) => {
    array.push(item);
    array.push({ text: "delimeter" });
  });

  return (
    <div className={cn("py-6 md:py-8 bg-primary text-white", props?.className)}>
      <Marquee autoFill>
        {array.map((item, index) => {
          if (item.text === "delimeter") {
            return (
              <svg
                key={index}
                width='33'
                height='32'
                viewBox='0 0 33 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.1212 0H15.8349V10.121L12.0439 0.737625L9.92504 1.5928L13.8159 11.2201L6.47202 3.87914L4.85571 5.49545L11.894 12.5338L2.77214 8.54587L1.85819 10.6412L11.5061 14.8583H0.976562V17.1446H11.5061L1.85819 21.3588L2.77214 23.4541L11.8911 19.4692L4.85277 26.5075L6.46908 28.1238L13.8101 20.7828L9.91917 30.4101L12.038 31.2653L15.829 21.8819V32.0029H18.1153V21.8819L21.9063 31.2653L24.0251 30.4101L20.1372 20.7828L27.4782 28.1238L29.0945 26.5075L22.0562 19.4692L31.1751 23.4541L32.0891 21.3588L22.4412 17.1417H32.9707V14.8554H22.4412L32.0891 10.6383L31.1751 8.54293L22.0562 12.5279L29.0945 5.48958L27.4782 3.87327L20.1372 11.2143L24.0251 1.58692L21.9063 0.731748L18.1153 10.1152V0H18.1212Z'
                  fill='currentColor'
                />
              </svg>
            );
          }

          return (
            <span className='px-12' key={index}>
              {item.text}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}

import { Exo_2 } from 'next/font/google';
import React from 'react';
const exo = Exo_2({
  subsets: ['latin'],
});

// 56px 40px 36px
export default function Insight({
  text,
  className,
  thin,
  extralight,
  light,
  medium,
  semibold,
  bold,
  extrabold,
  black,
  ...props
}) {
  return (
    <p
      {...props}
      className={`${
        exo.className
      } text-4xl md:text-[40px] lg:text-[56px] lg:leading-[56px]
      ${thin ? 'font-thin' : ''}  
      ${extralight ? 'font-extralight' : ''} 
      ${light ? 'font-light' : ''} 
      ${medium ? 'font-medium' : ''} 
      ${semibold ? 'font-semibold' : ''} 
      ${bold ? 'font-bold' : ''} 
      ${extrabold ? 'font-extrabold' : ''} 
      ${black ? 'font-black' : ''} 
      ${className}`}
    >
      {text}
    </p>
  );
}

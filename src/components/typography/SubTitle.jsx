import { Exo_2 } from 'next/font/google';
import React from 'react';
const exo = Exo_2({
  subsets: ['latin'],
});

// 20px 18px 18px
export default function SubTitle({
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
      className={`${exo.className} text-lg lg:text-xl
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

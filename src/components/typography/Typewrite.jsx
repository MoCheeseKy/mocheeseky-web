import { useEffect, useState } from 'react';

// 14px
export default function Typewrite({
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
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  return (
    <span
      {...props}
      className={`text-sm
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
      {currentText}
    </span>
  );
}

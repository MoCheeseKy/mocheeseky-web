// 12px
export default function Small({
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
      className={`text-xs
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

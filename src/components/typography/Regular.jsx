// 14px
export default function Regular({
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
      {text}
    </p>
  );
}

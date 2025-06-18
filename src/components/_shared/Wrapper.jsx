export default function Wrapper({ children, className }) {
  return (
    <>
      <div
        className={`px-4 md:px-0 w-full md:w-[85%] lg:w-full max-w-[1000px] ${className} min-h-fit`}
      >
        {children}
      </div>
    </>
  );
}

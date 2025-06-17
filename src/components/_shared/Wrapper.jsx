export default function Wrapper({
  children,
  className,
  backgroundColor = 'bg-transparent',
}) {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-grow w-full ${backgroundColor}`}
      >
        <div
          className={`px-4 md:px-[36px] w-full md:w-[85%] lg:w-full max-w-[1200px] ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

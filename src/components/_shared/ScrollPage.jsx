export default function ScrollPage({ ActiveSection, onClick }) {
  return (
    <div className='fixed z-50 flex-col items-center hidden -translate-y-1/2 top-1/2 right-6 md:flex'>
      <div className={`relative flex flex-col items-center gap-12  text-white`}>
        {['01', '02', '03', '04', '05'].map((label, i) => (
          <div key={i} className='relative flex items-center pl-10'>
            <span
              className={`py-2 px-[10px] text-md cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue hover:to-red z-10 ${
                i === ActiveSection
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-red font-bold border-r-2 border rounded-full border-white'
                  : 'text-gray-300'
              }`}
              onClick={() => onClick(i)}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

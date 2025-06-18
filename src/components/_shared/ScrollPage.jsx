// import { TbArrowDownBar, TbArrowUpBar } from 'react-icons/tb';

export default function ScrollPage({ ActiveSection, onClick }) {
  return (
    <div className='hidden fixed top-1/2 right-6 -translate-y-1/2  md:flex flex-col items-center z-50'>
      <div className={`relative flex flex-col items-center gap-12  text-white`}>
        {/* <div className='relative flex items-center pl-10'>
          {ActiveSection > 0 && (
            <TbArrowUpBar
              onClick={() => onClick(ActiveSection - 1)}
              className='text-4xl hover:text-blue'
            />
          )}
        </div> */}
        {['01', '02', '03', '04', '05'].map((label, i) => (
          <div key={i} className='relative flex items-center pl-10'>
            <span
              className={`py-2 px-[10px] text-md cursor-pointer hover:text-blue z-10 ${
                i === ActiveSection
                  ? 'text-blue font-bold border-r-2 border-2 rounded-full border-blue'
                  : 'text-gray-300'
              }`}
              onClick={() => onClick(i)}
            >
              {label}
            </span>
          </div>
        ))}
        {/* {ActiveSection < 4 && (
          <div className='relative flex items-center pl-10'>
            <TbArrowDownBar
              onClick={() => onClick(ActiveSection + 1)}
              className='text-4xl hover:text-blue'
            />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default function YearCard({ year = '2024 - 2025' }) {
  return (
    <div className='relative w-full max-w-md mx-auto'>
      {/* Label Tahun */}
      <div className='absolute z-10 px-2 py-1 text-sm font-bold text-black bg-white rounded shadow-md -top-4 left-4'>
        {year}
      </div>

      {/* Wrapper dengan border dan background image */}
      <div className='bg-[#1f1f1f] border-4 border-white shadow-xl rounded-md overflow-hidden'>
        <div className='bg-dspi bg-cover bg-center w-full aspect-[16/9]' />
      </div>
    </div>
  );
}

import { FaGithub } from 'react-icons/fa';

export default function ScrollPage({ ActiveSection, onClick }) {
  return (
    <div className='fixed top-1/2 right-6 -translate-y-1/2  flex flex-col items-center z-50'>
      <div className={`relative flex flex-col items-end gap-12  text-white`}>
        {['About', 'Journey', 'Project', 'More', 'Contact'].map((label, i) => (
          <div key={i} className='relative flex items-center pl-10'>
            <span
              className={`text-md cursor-pointer z-10 ${
                i === ActiveSection ? 'text-white font-bold' : 'text-gray-300'
              }`}
              onClick={() => onClick(i)}
            >
              {label}
            </span>
          </div>
        ))}
        <div className='relative flex items-center pl-10'>
          <FaGithub className='text-2xl' />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import ScrollPage from '@/components/_shared/ScrollPage';

export default function Home() {
  const [ActiveSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 5); // 3 section

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className={`${inter.className} relative h-[100vh] flex flex-col snap-y snap-mandatory overflow-y-scroll scroll-smooth`}
      >
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          data-index={0}
          className='flex min-h-screen bg-dark snap-normal snap-center'
        >
          <h1 className='text-white text-4xl'>Section {1}</h1>
        </div>
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          data-index={1}
          className='flex min-h-screen bg-dark snap-normal snap-center'
        >
          <h1 className='text-white text-4xl'>Section {2}</h1>
        </div>
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          data-index={2}
          className='flex min-h-screen bg-dark snap-normal snap-center'
        >
          <h1 className='text-white text-4xl'>Section {3}</h1>
        </div>
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          data-index={3}
          className='flex min-h-screen bg-dark snap-normal snap-center'
        >
          <h1 className='text-white text-4xl'>Section {4}</h1>
        </div>
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          data-index={4}
          className='flex min-h-screen bg-dark snap-normal snap-center'
        >
          <h1 className='text-white text-4xl'>Section {5}</h1>
        </div>
      </div>

      <ScrollPage ActiveSection={ActiveSection} onClick={scrollToSection} />
    </>
  );
}

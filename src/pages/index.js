import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// pemanis
import ScrollPage from '@/components/_shared/ScrollPage';
import MeteorBackground from '@/components/_shared/MeteorBackground';
import SmoothCursor from '@/components/_shared/SmoothCursor';

// sections
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ExperiencesSection from './ExperiencesSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';

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
      <MeteorBackground>
        <div
          className={`${inter.className} h-screen flex flex-col snap-y snap-mandatory overflow-y-scroll scroll-smooth `}
        >
          <SmoothCursor />
          {/* about */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            data-index={0}
            className='box-border flex min-h-screen py-24 overflow-y-auto snap-start'
            style={{ minHeight: '100vh' }}
          >
            <div className='flex justify-center w-full my-auto'>
              <AboutSection />
            </div>
          </div>

          {/* skills */}
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            data-index={1}
            className='box-border flex min-h-screen py-24 overflow-y-auto snap-start'
            style={{ minHeight: '100vh' }}
          >
            <div className='flex justify-center w-full my-auto'>
              <SkillSection />
            </div>
          </div>

          {/* experiences */}
          <div
            ref={(el) => (sectionRefs.current[2] = el)}
            data-index={2}
            className='box-border flex min-h-screen py-24 overflow-y-auto snap-start'
            style={{ minHeight: '100vh' }}
          >
            <div className='flex justify-center w-full my-auto'>
              <ExperiencesSection />
            </div>
          </div>

          {/* more */}
          <div
            ref={(el) => (sectionRefs.current[3] = el)}
            data-index={3}
            className='box-border flex min-h-screen py-24 overflow-y-auto snap-start'
            style={{ minHeight: '100vh' }}
          >
            <div className='flex justify-center w-full my-auto'>
              <ProjectSection />
            </div>
          </div>

          {/* contact */}
          <div
            ref={(el) => (sectionRefs.current[4] = el)}
            data-index={4}
            className='box-border flex min-h-screen py-24 overflow-y-auto snap-start'
            style={{ minHeight: '100vh' }}
          >
            <div className='flex justify-center w-full my-auto'>
              <ContactSection />
            </div>
          </div>
        </div>

        <ScrollPage ActiveSection={ActiveSection} onClick={scrollToSection} />
      </MeteorBackground>
    </>
  );
}

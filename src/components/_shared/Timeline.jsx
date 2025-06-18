'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    year: '2022',
    title: 'Started Freelancing',
    description: 'Began taking freelance web projects in frontend development.',
  },
  {
    year: '2023',
    title: 'Joined Telkom University',
    description:
      'Started my journey in Software Engineering (RPL) at Telkom University.',
  },
  {
    year: '2024',
    title: 'Built Major Projects',
    description:
      'Worked on cafe POS system, Danta Yoga platform, and became a mentor.',
  },
];

export default function StickyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className='relative px-6 py-24 text-white bg-black md:px-24'
    >
      {/* Vertical Timeline Line */}
      <motion.div
        style={{ height: lineHeight }}
        className='absolute top-0 w-1 origin-top rounded-full left-10 bg-gradient-to-b from-blue-500 to-purple-500'
      />

      <div className='ml-20 space-y-32'>
        {timelineData.map((event, index) => (
          <div key={index} className='relative'>
            {/* Bullet */}
            <div className='absolute z-10 flex items-center justify-center w-6 h-6 bg-black border-4 border-white rounded-full -left-12 top-2'>
              <div className='w-2 h-2 bg-white rounded-full' />
            </div>

            {/* Sticky Year */}
            <div className='sticky mb-6 text-4xl font-bold text-white top-24'>
              {event.year}
            </div>

            {/* Content */}
            <div className='max-w-2xl ml-4'>
              <h3 className='mb-2 text-2xl font-semibold'>{event.title}</h3>
              <p className='text-gray-400'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

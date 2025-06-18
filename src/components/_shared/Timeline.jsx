import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    year: '2020 - 2023',
    firstTitle: 'Studied at',
    secondTitle: 'Vocational High School 13 Bandung',
    description: 'Graduated as a Software Engineering major.',
    content: <></>,
  },
  {
    year: '2024 - Present',
    firstTitle: 'Studied at',
    secondTitle: 'Telkom University Bandung',
    description: "Pursuing a Bachelor's degree in Software Engineering.",
    content: <></>,
  },
  {
    year: '2022 - 2023',
    firstTitle: 'Worked at',
    secondTitle: 'Sagara Technology Bandung',
    description:
      'Sagara Technology has been my professional workplace as a Frontend Web Developer. I was responsible for slicing UI designs, handling frontend logic, integrating with the backend, ensuring clean and high-quality code, and in some projects, I also served as the frontend team leader.',
    content: <></>,
  },
  {
    year: '2024',
    firstTitle: 'Became a mentor',
    secondTitle: 'at International Woman University',
    description:
      'Served as a mentor responsible for teaching university students at International Woman University, with a focus on helping them understand React.js.',
    content: <></>,
  },
  {
    year: '2023 - 2025',
    firstTitle: '',
    secondTitle: 'Freelance',
    description:
      'Worked as a Frontend Web Developer and served as a Frontend Team Leader in several projects. I was involved in handling major projects, including those for the Ministry of Health (KEMENKES) and the Indonesian Railway Company (KAI).',
    content: <></>,
  },
  {
    year: '2025 - Present',
    firstTitle: 'Became a mentor',
    secondTitle: 'Telkom University Bandung',
    description:
      'Served as a mentor at Central Computer Improvement (CCI), a student organization at Telkom University Bandung, responsible for teaching students with a specific focus on mastering Next.js.',
    content: <></>,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 80%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full min-h-screen' ref={containerRef}>
      {/* Timeline */}
      <div ref={ref} className='relative pb-20 mx-auto max-w-7xl'>
        {/* Static Timeline Line Background */}
        <div
          style={{ height: height + 'px' }}
          className='absolute left-6 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent z-0'
        />

        {/* Animated Progress Line */}
        <div
          style={{ height: height + 'px' }}
          className='absolute left-6 top-0 overflow-hidden w-[3px] z-10'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-blue to-transparent rounded-full'
          />
        </div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className='relative z-20 flex justify-start pt-10 md:pt-20 md:gap-10'
          >
            {/* Timeline Point & Year */}
            <div className='sticky z-30 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full'>
              <div className='h-14 absolute left-0.5 md:left-0.5 ml-[-5px] w-14 rounded-full bg-dark flex items-center justify-center shadow-lg z-40'>
                <div className='z-50 w-6 h-6 rounded-full shadow-md bg-gradient-to-r from-blue to-red' />
              </div>
              <h3 className='hidden text-2xl font-bold text-gray-300 md:text-4xl md:block md:pl-20 dark:text-gray-700'>
                {item.year}
              </h3>
            </div>

            {/* Content */}
            <div className='relative w-full pl-16 pr-4 md:pl-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='p-6 transition-shadow duration-300 bg-white border border-gray-800 shadow-xl rounded-2xl md:p-8 hover:shadow-2xl'
              >
                <h3 className='block mb-0 text-xs font-bold md:mb-4 md:text-2xl text-dark md:text-gray-300 md:hidden'>
                  {item.year}
                </h3>

                <div>
                  <h4 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue to-red md:text-2xl'>
                    {item.firstTitle}
                  </h4>
                  <h4 className='mb-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue to-red md:text-2xl '>
                    {item.secondTitle}
                  </h4>
                  <p className='text-base leading-relaxed text-dark 0'>
                    {item.description}
                  </p>
                </div>

                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

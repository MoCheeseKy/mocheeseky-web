'use client';

import { motion } from 'framer-motion';

export default function WavyText({ text, delay = 0 }) {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay, // Delay dari props
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
  };

  return (
    <motion.div
      className='flex flex-wrap text-xl font-bold text-white md:text-2xl lg:text-3xl'
      variants={container}
      initial='hidden'
      whileInView='visible'
      //   viewport={{ once: true }}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

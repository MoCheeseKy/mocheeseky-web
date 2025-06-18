import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MeteorBackground({ children }) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMeteor = {
        id: Date.now(),
        left: Math.random() * window.innerWidth,
      };
      setMeteors((prev) => [...prev, newMeteor]);

      // remove after animation
      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== newMeteor.id));
      }, 1000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden bg-dark'>
      {/* Meteors */}
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: 800, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='absolute w-[2px] h-[100px] bg-white opacity-60'
          style={{ left: meteor.left }}
        />
      ))}

      {/* Children content */}
      <div className='relative z-10'>{children}</div>
    </div>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SmoothCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const angle = useMotionValue(0);

  const smoothX = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(cursorY, { damping: 20, stiffness: 300 });

  const prevPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x);
      cursorY.set(y);

      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;
      const rad = Math.atan2(dy, dx);
      const deg = rad * (180 / Math.PI);
      angle.set(deg);

      prevPos.current = { x, y };
    };

    const rafMove = (e) => requestAnimationFrame(() => move(e));
    window.addEventListener('mousemove', rafMove);
    return () => window.removeEventListener('mousemove', rafMove);
  }, []);

  return (
    <motion.div
      className='w-8 h-8 fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference'
      style={{
        translateX: smoothX,
        translateY: smoothY,
        x: '-50%', // ✅ offset X agar posisi berada di tengah pointer
        y: '-50%', // ✅ offset Y agar posisi berada di tengah pointer
        rotate: angle,
      }}
    >
      {/* Custom cursor icon */}
      <div className='w-4 h-4 bg-white rounded-full' />
    </motion.div>
  );
}

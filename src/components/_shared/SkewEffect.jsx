import { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

function calcRotation({ x, y, width, height, maxX = 5, maxY = 8 }) {
  const cx = width / 2,
    cy = height / 2;
  const dx = x - cx,
    dy = y - cy;
  const rotY = (
    ((-dx / cx) * maxY * Math.hypot(dx, dy)) /
    Math.hypot(cx, cy)
  ).toFixed(2);
  const rotX = (
    ((dy / cy) * maxX * Math.hypot(dx, dy)) /
    Math.hypot(cx, cy)
  ).toFixed(2);
  return { rotX, rotY };
}

export default function SkewCard({ className, children }) {
  const ref = useRef(null);
  const setVars = useCallback(({ x, y }) => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    const { rotX, rotY } = calcRotation({ x, y, width, height });
    ref.current.style.setProperty('--rX', `${rotX}deg`);
    ref.current.style.setProperty('--rY', `${rotY}deg`);
  }, []);

  useMousePosition(ref, setVars);

  return (
    <motion.div
      ref={ref}
      className={`w-fit h-fit transform-gpu rounded-xl  shadow-lg transition-transform ease-linear will-change-transform ${className}`}
      style={{
        transform: 'perspective(600px) rotateX(var(--rX)) rotateY(var(--rY))',
        transitionDuration: '40ms',
      }}
      onMouseLeave={() => {
        ref.current.style.setProperty('--rX', '0deg');
        ref.current.style.setProperty('--rY', '0deg');
      }}
    >
      {children}
    </motion.div>
  );
}

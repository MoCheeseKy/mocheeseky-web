import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaGitlab,
  FaTrello,
  FaFigma,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaSass,
} from 'react-icons/fa';
import { SiNotion, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiVisualstudio } from 'react-icons/di';

const outerIcons = [
  { icon: FaHtml5, color: '#e34c26' },
  { icon: FaCss3Alt, color: '#2965f1' },
  { icon: RiTailwindCssFill, color: '#22d3ee' },
  { icon: FaSass, color: '#CC6699' },
  { icon: FaJs, color: '#f7df1e' },
  { icon: SiTypescript, color: '#3178c6' },
  { icon: FaReact, color: '#61DAFB' },
  { icon: SiNextdotjs, color: '#fff' },
  { icon: FaVuejs, color: '#42B883' },
];

const innerIcons = [
  { icon: FaGithub, color: '#fff' },
  { icon: FaGitlab, color: '#e24329' },
  { icon: FaTrello, color: '#0079bf' },
  { icon: FaFigma, color: '#f24e1e' },
  { icon: SiNotion, color: '#fff' },
  { icon: DiVisualstudio, color: '#007ACC ' },
];

const OrbitingCircles = () => {
  const [outerRotation, setOuterRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const outerRadius = 240;
  const innerRadius = 140;

  useEffect(() => {
    // Animation for outer orbit
    let outerAnimationId;
    let innerAnimationId;
    let lastTime = performance.now();

    const animate = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Update rotations (degrees per millisecond)
      setOuterRotation((prev) => (prev + deltaTime * 0.012) % 360); // 360 degrees in 30 seconds
      setInnerRotation((prev) => (prev - deltaTime * 0.018) % 360); // -360 degrees in 20 seconds

      outerAnimationId = requestAnimationFrame(animate);
    };

    outerAnimationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(outerAnimationId);
      cancelAnimationFrame(innerAnimationId);
    };
  }, []);

  return (
    <div className='relative flex items-center justify-center w-[600px] h-[600px] mx-auto bg-dark rounded-full'>
      {/* Outer Circle */}
      <div className='absolute w-[480px] h-[480px] border border-white/20 rounded-full'>
        {outerIcons.map(({ icon: Icon, color }, i) => {
          const angle = (360 / outerIcons.length) * i + outerRotation;
          const x = outerRadius * Math.cos((angle * Math.PI) / 180);
          const y = outerRadius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className='absolute flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 border rounded-full bg-dark border-white/30'
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
              }}
            >
              <Icon size={32} color={color} />
            </div>
          );
        })}
      </div>

      {/* Inner Circle */}
      <div className='absolute w-[280px] h-[280px] rounded-full border border-white/20'>
        {innerIcons.map(({ icon: Icon, color }, i) => {
          const angle = (360 / innerIcons.length) * i + innerRotation;
          const x = innerRadius * Math.cos((angle * Math.PI) / 180);
          const y = innerRadius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className='absolute flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border rounded-full border-white/30'
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
              }}
            >
              <Icon size={32} color={color} />
            </div>
          );
        })}
      </div>

      {/* Center dot */}
      {/* <div className='w-4 h-4 bg-white rounded-full' /> */}
    </div>
  );
};

export default OrbitingCircles;

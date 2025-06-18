import Wrapper from '@/components/_shared/Wrapper';
import Typography from '@/components/typography';
import OrbitingCircles from '@/components/_shared/OrbitingIcon';

export default function SkillSection() {
  return (
    <>
      <Wrapper className='flex flex-col justify-center w-full text-white lg:flex-row md:justify-start lg:justify-between'>
        <div className='max-w-[444px] mih-h-[168px]'>
          <Typography.Insight bold text={`Expertise.`} className={'w-fit'} />
          <p className='mt-12 text-base break-words whitespace-normal lg:text-lg'>
            I possess a range of skills, with my{' '}
            <span className='font-bold text-red'>
              core expertise in React.js and Next.js
            </span>
            . I{`'`}m also proficient in various UI libraries such as Material
            UI, shadcn/ui, and Ant Design. In addition, I have a solid grasp of
            Framer Motion and can use it effectively to create smooth, engaging
            animations.
          </p>
        </div>
        <div className='relative bottom-[-40px] right-[-30px] md:bottom-0 md:right-0'>
          <OrbitingCircles />
        </div>
      </Wrapper>
    </>
  );
}

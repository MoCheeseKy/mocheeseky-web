import Wrapper from '@/components/_shared/Wrapper';
import SkewCard from '@/components/_shared/SkewEffect';
import Typography from '@/components/typography';

export default function AboutSection() {
  return (
    <>
      <Wrapper className='flex flex-col justify-center gap-12 text-white lg:flex-row md:justify-start lg:justify-between'>
        <div id='about' className='flex flex-col gap-2 md:gap-4'>
          <div>
            <Typography.Large className='mb-[-6px]' text='Wellcome !' />
            <Typography.Large text={`At least youre finally here. It's me,`} />
          </div>
          <p className='relative z-[2] font-bold text-4xl md:text-[40px] lg:text-[56px] lg:leading-[56px]'>
            <span className='text-red'>Rifky</span>{' '}
            <span className='text-green'>Muhammad</span>{' '}
            <span className='text-blue'>Prayudhi</span>
          </p>
          <div className='min-h-[28px] w-[85%] md:w-[65%] flex gap-4 items-center'>
            <Typography.Typewrite
              bold
              className='text-base lg:text-lg'
              text='Frontend Developer'
            />
            <div className='h-[2px] bg-light flex-grow' />
          </div>
          <Typography.Regular
            className='md:w-[80%]'
            text='I am organized, fast learner, and high-spirited person with an interest in new technology who is passionate about frontend web developer. Experienced for 3 year with a background in frontend web development field.'
          />
        </div>
        <div className='flex justify-center'>
          <SkewCard className='w-full max-w-[344px] overflow-hidden rounded-xl md:w-fit'>
            <div className='w-full md:w-[344px] md:h-auto aspect-[3/4] bg-profile bg-no-repeat bg-cover'></div>
          </SkewCard>
        </div>
      </Wrapper>
    </>
  );
}

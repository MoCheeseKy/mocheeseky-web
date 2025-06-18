import Wrapper from '@/components/_shared/Wrapper';
import Timeline from '@/components/_shared/Timeline';
import Typography from '@/components/typography';

export default function ExperiencesSection() {
  return (
    <>
      <Wrapper className='flex flex-col justify-center text-white md:gap-12 md:justify-start lg:justify-between'>
        <Typography.Insight bold text={`My Journey.`} />
        <Timeline />
      </Wrapper>
    </>
  );
}

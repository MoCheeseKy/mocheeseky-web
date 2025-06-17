import CardSkew from '../animata/CardSkew';

export default function ProfileCard({ className, children }) {
  return (
    <CardSkew>
      <div className='w-[300px] aspect-[3/4] bg-profile bg-no-repeatb bg-cover'>
        {/* <div className='w-full h-full'>{children}</div> */}
      </div>
    </CardSkew>
  );
}

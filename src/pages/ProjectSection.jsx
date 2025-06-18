import Wrapper from '@/components/_shared/Wrapper';
import Typography from '@/components/typography';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ProjectSection() {
  return (
    <>
      <Wrapper className='flex flex-col justify-center h-2 gap-12 text-white md:justify-start lg:justify-between'>
        <Typography.Insight bold text={`Example Project Overview.`} />

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6'>
          {/* project items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='relative w-full max-w-md mx-auto'>
              {/* Label Tahun */}
              <div className='absolute z-10 px-2 py-1 text-sm font-bold border border-white rounded shadow-md tex-white bg-dark -top-4 left-4'>
                2024 -2025
              </div>

              {/* Wrapper dengan border dan background image */}
              <div className='bg-[#1f1f1f] border-4 border-white shadow-xl rounded-md overflow-hidden'>
                <div className='bg-satu-dna bg-cover bg-center w-full aspect-[16/9]' />
              </div>
            </div>
          </motion.div>
          <div className='flex flex-col col-span-2 gap-4'>
            <Typography.WavyText text={'SatuDNA'} />
            <div className='flex gap-4'>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                Next.js
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                Tailwind CSS
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                Material UI
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-red'>
                Frontend Developer
              </div>
            </div>
            <div className='lg:max-w-[80%]'>
              <Typography.Regular
                text={
                  'SatuDNA is a pharmacogenomics platform developed under the BGSi program and accessible via the SatuSehat application. It provides pharmacogenomic data for the Indonesian population, supporting both healthcare providers and individuals in enabling precision medicine. To ensure secure and accessible pharmacogenomics data, SatuDNA collaborates with a wide range of professionals and institutions, including hospitals and genomic databanks.'
                }
              />
            </div>
          </div>
          {/* project items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='relative w-full max-w-md mx-auto'>
              {/* Label Tahun */}
              <div className='absolute z-10 px-2 py-1 text-sm font-bold border border-white rounded shadow-md tex-white bg-dark -top-4 left-4'>
                2024 - 2025
              </div>

              {/* Wrapper dengan border dan background image */}
              <div className='bg-[#1f1f1f] border-4 border-white shadow-xl rounded-md overflow-hidden'>
                <div className='bg-dspi bg-cover bg-center w-full aspect-[16/9]' />
              </div>
            </div>
          </motion.div>
          <div className='flex flex-col col-span-2 gap-4'>
            <Typography.WavyText text={'Reconciliation KAI'} />
            <div className='flex gap-4'>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                Next.js
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                Tailwind CSS
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                ANT Design
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-red'>
                Frontend Developer Team Lead
              </div>
            </div>
            <div className='lg:max-w-[80%]'>
              <Typography.Regular
                text={
                  'An application from PT. Kereta Api Indonesia (Persero). It serves as a media for monitoring the performance of Payment Gateway partners, B2B partners, and Additional Service Providers (adds-on) available in the KAI Access application and EDC Loket Transactions, as well as a tool for evaluating the performance of Payment Gateway partners, B2B partners, and Additional Service Providers (adds-on) available in the KAI Access application and EDC Loket Transactions. This dashboard/web portal is designed to meet the specific needs of the Digital Business Unit (settlement team) and will be developed using modern web development technologies to ensure reliability, scalability, and security.'
                }
              />
            </div>
          </div>
          {/* project items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='relative w-full max-w-md mx-auto'>
              {/* Label Tahun */}
              <div className='absolute z-10 px-2 py-1 text-sm font-bold border border-white rounded shadow-md tex-white bg-dark -top-4 left-4'>
                2023 - 2024
              </div>

              {/* Wrapper dengan border dan background image */}
              <div className='bg-[#1f1f1f] border-4 border-white shadow-xl rounded-md overflow-hidden'>
                <div className='bg-dspi bg-cover bg-center w-full aspect-[16/9]' />
              </div>
            </div>
          </motion.div>
          <div className='flex flex-col col-span-2 gap-4'>
            <Typography.WavyText text={'Indonesian Food Systems Dashboard'} />
            <div className='flex gap-4'>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                Next.js
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-blue'>
                CSS Module
              </div>
              <div className='px-6 py-1 text-xs text-white rounded-full bg-red'>
                Frontend Developer
              </div>
            </div>
            <div className='lg:max-w-[80%]'>
              <Typography.Regular
                text={
                  'From International Organization GAIN (Global Alliance for Improved Nutrition). The Indonesian Food Systems Dashboard (DSPI) was modeled after and works just like the Global Food Systems Dashboard, but instead of focusing on national-level data for Indonesia, the Indonesian dashboard will cover data for two administrative levels: Provincial, and City/Regency. Primarily for Indonesia, data has been collected from sources that covers 34 provinces and 514 cities/regencies.'
                }
              />
            </div>
          </div>
        </div>
        <Typography.Insight bold text={`Certifications.`} />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='w-full bg-no-repeat bg-cover bg-iwu-mentor aspect-[16/12]' />
          </motion.div>
        </div>
        <div className='flex justify-end'>
          <a
            className='flex items-center gap-4 text-green hover:text-blue'
            href='https://www.linkedin.com/in/rifkymprayudhi/'
          >
            <Typography.Large
              text={`Let’s connect on LinkedIn! Click here to learn more`}
            />
            <FaArrowRightLong />
          </a>
        </div>
      </Wrapper>
    </>
  );
}

import ContactForm from '@/components/form/ContactForm';
import Wrapper from '@/components/_shared/Wrapper';
import Typography from '@/components/typography';
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <>
      <Wrapper className='flex flex-col justify-center gap-12 text-white lg:flex-row md:justify-start lg:justify-between'>
        <div>
          <Typography.Insight bold text='Get In Touch.' />
          <Typography.Large
            text='Got a question, an idea, or a project in mind? '
            className='mt-6 lg:mt-12'
          />
          <Typography.Large text='I’d love to hear from you. Let’s get in touch!' />
          <div className='flex flex-col gap-6 mt-6 lg:mt-12'>
            <a
              href='https://github.com/MoCheeseKy'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 hover:text-blue'
            >
              + <FaGithub className='text-2xl ' /> GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/rifkymprayudhi/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 hover:text-blue'
            >
              + <FaLinkedin className='text-2xl ' /> LinkedIn
            </a>
            {/* <a
            href='mailto:rifky.muhammadprayudhi@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 hover:text-blue'
          >
            + <FaMail className='text-2xl ' /> Email
          </a> */}
            <a
              href='https://www.instagram.com/mocheeseky/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 hover:text-blue'
            >
              + <FaInstagram className='text-2xl ' /> Instagram
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </Wrapper>
    </>
  );
}

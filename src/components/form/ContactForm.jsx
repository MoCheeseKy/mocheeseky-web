import React, { useState } from 'react';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNext = () => setStep(step + 1);
  const handleRestart = () => {
    setStep(1);
    setEmail('');
    setName('');
    setDescription('');
  };

  return (
    <div className='w-full max-w-[800px] p-6 mx-auto font-mono text-white bg-[#252525] rounded-lg shadow-xl min-h-[500px] border-[1px] border-gray-600'>
      <div className='mb-4'>
        <div className='text-green'>
          contact@rifky.muhammadprayudhi@gmail.com
        </div>
        <div className='text-green'>
          please drop your email, name, and tell me how i can help you ^^
        </div>
        {step >= 1 && (
          <>
            <p className='mt-2'>
              To start, could you give us your{' '}
              <span className='text-blue'>email?</span>
            </p>
            {email ? (
              <div className='text-green'>✔ {email}</div>
            ) : (
              <input
                type='email'
                className='w-full text-green-300 bg-transparent border-b border-blue focus:outline-none'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setEmail(e.target.value);
                    handleNext();
                  }
                }}
                autoFocus
              />
            )}
          </>
        )}

        {step >= 2 && (
          <>
            <p className='mt-4'>
              Awesome! And whats your <span className='text-blue'>name?</span>
            </p>
            {name ? (
              <div className='text-green'>✔ {name}</div>
            ) : (
              <input
                type='text'
                className='w-full text-green-300 bg-transparent border-b border-blue focus:outline-none'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setName(e.target.value);
                    handleNext();
                  }
                }}
                autoFocus
              />
            )}
          </>
        )}

        {step >= 3 && (
          <>
            <p className='mt-4'>
              Perfect, and{' '}
              <span className='text-blue'>how can we help you?</span>
            </p>
            {description ? (
              <div className='text-green'>✔ {description}</div>
            ) : (
              <textarea
                rows='2'
                className='w-full text-green-300 bg-transparent border-b resize-none border-blue focus:outline-none'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setDescription(e.target.value);
                    handleNext();
                  }
                }}
                autoFocus
              />
            )}
          </>
        )}
      </div>

      {step >= 4 && (
        <>
          <p className='text-blue-300'>Thank you! Plese check again:</p>
          {/* <pre className='mt-2 text-white'>
            email: <span className='text-green-300'>{email}</span>
            <br />
            name: <span className='text-green-300'>{name}</span>
            <br />
            description: <span className='text-green-300'>{description}</span>
          </pre> */}
          <div className='flex flex-col gap-4 mt-4'>
            <div>
              <div className='text-green-300'>Email:</div>
              <div className='text-white'>{email}</div>
            </div>
            <div>
              <div className='text-green-300'>Name:</div>
              <div className='text-white'>{name}</div>
            </div>
            <div>
              <div className='text-green-300'>Description:</div>
              <div className='text-white text-wrap'>{description}</div>
            </div>
          </div>
          <div className='flex gap-2 mt-4'>
            <button
              className='px-4 py-1 bg-gray-700 rounded hover:bg-gray-600'
              onClick={handleRestart}
            >
              Restart
            </button>
            <button
              className='px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-400'
              onClick={() => alert('Form submitted!')}
            >
              Send it!
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;

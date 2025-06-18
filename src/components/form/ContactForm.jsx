import React, { useEffect, useState } from 'react';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [SendStatus, setSendStatus] = useState('');

  const handleNext = () => setStep(step + 1);

  useEffect(() => {
    if (SendStatus.toLowerCase() === 'y') {
      console.log('test');
    } else {
      setStep(1);
      setEmail('');
      setName('');
      setDescription('');
      setSendStatus('');
    }
  }, [SendStatus]);

  return (
    <div className='w-full md:max-w-[488px] h-fit p-6 font-mono text-white bg-[#252525] rounded-lg shadow-xl min-h-[400px] border-[1px] border-gray-600 '>
      <div className='mb-4'>
        <div className='text-green whitespace-normal break-words'>
          Please drop your email, name, <br />
          and tell me how i can help you ^^
        </div>
        <div className='text-green whitespace-normal break-words mt-4'>
          ----------
        </div>
        {step >= 1 && (
          <>
            <p className='mt-4'>
              To start, could you give me your{' '}
              <span className='text-blue'>email?</span>
            </p>
            {email ? (
              <div className='text-green whitespace-normal break-words'>
                ✔ {email}
              </div>
            ) : (
              <input
                type='email'
                className='w-full text-green bg-transparent border-b border-blue focus:outline-none'
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
              <div className='text-green whitespace-normal break-words'>
                ✔ {name}
              </div>
            ) : (
              <input
                type='text'
                className='w-full text-green bg-transparent border-b border-blue focus:outline-none'
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
              <>
                <div className='text-green whitespace-normal break-words'>
                  ✔ {description}
                </div>
                <div className='text-green whitespace-normal break-words mt-4'>
                  ----------
                </div>
              </>
            ) : (
              <textarea
                rows='2'
                className='w-full text-green bg-transparent border-b resize-none border-blue focus:outline-none'
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
          <p className='text-blue-300 mt-6'>Thank you! Plese check again:</p>
          <div className='flex flex-col gap-4 mt-4'>
            <div>
              <div className='text-green whitespace-normal break-words'>
                Email:
              </div>
              <div className='text-white'>{email}</div>
            </div>
            <div>
              <div className='text-green whitespace-normal break-words'>
                Name:
              </div>
              <div className='text-white'>{name}</div>
            </div>
            <div>
              <div className='text-green whitespace-normal break-words'>
                Description:
              </div>
              <div className='text-white whitespace-normal break-words'>
                {description}
              </div>
            </div>
          </div>
          {step >= 1 && (
            <>
              <p className='mt-4'>
                Send?
                <span className='text-blue'> (Y/N)</span>
              </p>
              {SendStatus ? (
                <>
                  <div className='text-green whitespace-normal break-words'>
                    ✔ {SendStatus}
                  </div>
                  <div className='text-green whitespace-normal break-words mt-6'>
                    Thank you for reaching out! <br />
                    I’ll review your message and get back to you shortly ^^{' '}
                    <br />
                    Until then, have a great day!
                  </div>
                </>
              ) : (
                <input
                  type='sendStatus'
                  className='w-full text-green bg-transparent border-b border-blue focus:outline-none'
                  onChange={(e) => setSendStatus(e.target.value)}
                  autoFocus
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContactForm;

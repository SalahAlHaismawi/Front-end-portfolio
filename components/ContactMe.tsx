import React, { useState, useEffect } from 'react';
import { MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    setHeight();
    window.addEventListener('resize', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
    const mailtoLink = `mailto:salah322s1@gmail.com?subject=${subject}&body=${body}`;
    if (typeof window !== 'undefined') {
      window.location.href = mailtoLink;
    }
  };

  return (
    <div
      className="flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">Contact</h3>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-10 mt-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#66fcf1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">salah322s1@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#66fcf1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto max-w-md">
          <div className="flex space-x-2">
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Name"
              className={`contactInput w-full ${errors.name ? 'border-red-500' : ''}`}
              type="text"
            />
            <input
              {...register('email', { required: 'Email is required' })}
              placeholder="Email"
              className={`contactInput w-full ${errors.email ? 'border-red-500' : ''}`}
              type="email"
            />
          </div>
          <input
            {...register('subject', { required: 'Subject is required' })}
            placeholder="Subject"
            className={`contactInput w-full ${errors.subject ? 'border-red-500' : ''}`}
            type="text"
          />
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Message"
            className={`contactInput w-full ${errors.message ? 'border-red-500' : ''}`}
          />
          <button type="submit" className="bg-[#66fcf1] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

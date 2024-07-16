import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const mailtoLink = `mailto:salah322s1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent('Hi, my name is ' + formData.name + '. ' + formData.message + ' (' + formData.email + ')')}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">Contact</h3>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-10 mt-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#66fcf1] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">salah322s1@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#66fcf1] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto max-w-md">
          <div className="flex space-x-2">
            <input
              {...register('name', { required: "Name is required" })}
              placeholder="Name"
              className={`contactInput w-full ${errors.name && "border-red-500"}`}
              type="text"
            />
            <input
              {...register('email', { required: "Email is required" })}
              placeholder="Email"
              className={`contactInput w-full ${errors.email && "border-red-500"}`}
              type="email"
            />
          </div>
          <input
            {...register('subject', { required: "Subject is required" })}
            placeholder="Subject"
            className={`contactInput w-full ${errors.subject && "border-red-500"}`}
            type="text"
          />
          <textarea
            {...register('message', { required: "Message is required" })}
            placeholder="Message"
            className={`contactInput w-full ${errors.message && "border-red-500"}`}
          />
          <button className="bg-[#66fcf1] py-5 px-10 rounded-md text-black font-bold text-lg">
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

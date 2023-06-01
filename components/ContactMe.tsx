import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = 'mailto:salah322s1@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})';
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-[#66fcf1] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        

        <div className="flex flex-col space-y-10 mt-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#66fcf1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">0139996340</p>
          </div>

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
            <input  placeholder="Name" className="contactInput w-full" type="text" />
            <input  placeholder="Email" className="contactInput w-full" type="email" />
          </div>
          <input  placeholder="Subject" className="contactInput w-full" type="text" />
          <textarea  placeholder="Message" className="contactInput w-full" />
          <button className="bg-[#66fcf1] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

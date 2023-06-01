/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from 'next/image';

import React from "react";

import website1 from '../assets/website1.png'
import website2 from '../assets/website2.png'


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
type Props = {};
const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "red",
  opacity: 0.7,
  fontSize: "20px"
};

const Projects = (props: Props) => {
  return (
    
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden " >
        <style>
        {`
          :not(.awssld) {
            --content-background-color: #0b0c10 !important;
            --organic-arrow-color: #66fcf1 !important;
            --control-bullet-color: #66fcf1 !important;
          }
        `}
      </style>
<AwesomeSlider 
    >
    <div>
      <Image src={website2} alt="website1" />
    </div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>

      
      {/* <h3 className="absolute top-24  uppercase tracking-[20px] text-[#66fcf1] text-2xl">
        Projects
      </h3>
      <div className="max-w-4xl w-full">
        
      </div>
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        autoplay={{ 
          disableOnInteraction: false,
          delay: 5000 
        }}
        spaceBetween={50}
        slidesPerView={1}
    
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        
          <SwiperSlide className="flex items-center justify-center">
          <div className="flex justify-center">
            <Image
              src={website1}
              alt="Image 1"
              className="object-center w-full h-auto max-w-lg xl:max-w-3xl 2xl:max-w-4xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex justify-center">
            <Image
              src={website2}
              alt="Image 1"
              className="object-center w-full h-auto max-w-lg xl:max-w-3xl 2xl:max-w-4xl"
            />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="flex items-center justify-center">
          <div className="flex justify-center">
            <img
              src='https://i.imgur.com/jVFgAKu.png'
              alt="Image 1"
              className="object-center w-full h-auto max-w-lg xl:max-w-3xl 2xl:max-w-4xl"
            />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="flex items-center justify-center">
          <div className="flex justify-center">
            <img
              src='https://i.imgur.com/jVFgAKu.png'
              alt="Image 1"
              className="object-center w-full h-auto max-w-lg xl:max-w-3xl 2xl:max-w-4xl"
            />
          </div>
        </SwiperSlide> */}
        {/* <div className='custom-navigation'>

        </div>
      </Swiper> */}
    </div>
  );
};

export default Projects;

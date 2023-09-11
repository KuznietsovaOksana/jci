import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './CurrentProjectSlider.module.css';

import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';


import { ImageProps } from '@/sections/CurrentProjectPage/IntroSection/data';

interface CurrentProjectSliderProps {
  images: ImageProps[];
}

export const CurrentProjectSlider: React.FC<CurrentProjectSliderProps> = ({
  images,
}) => {
  return (
    <Swiper
      // autoplay={{
      //   delay: 3000,
      // }}
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.currentProjectSlider}
      // globalStyles need to fix!!!
      spaceBetween={0}
      navigation={{
        prevEl: '.currProjSliderBtnPrev',
        nextEl: '.currProjSliderBtnNext',
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.currentProjectSlider}>
          <Image
            src={image.src}
            alt={image.alt}
            width='287'
            height='225'
            className={styles.photo}
            priority
          />
        </SwiperSlide>
      ))}
      <div className='currProjSliderNavBtns'>
            <div className='currProjSliderBtnPrev'>
              <LeftArrow />
            </div>
            <div className='currProjSliderBtnNext'>
              <RightArrow />
            </div>
          </div>
    </Swiper>
  );
};

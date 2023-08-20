import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './CurrentProjectSlider.module.css';

import { ImageProps } from '@/sections/CurrentProjectPage/IntroSection/data';

interface CurrentProjectSliderProps {
  images: ImageProps[];
}

export const CurrentProjectSlider: React.FC<CurrentProjectSliderProps> = ({
  images,
}) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Autoplay, Pagination]}
      className={styles.currentProjectSlider}
      // globalStyles need to fix!!!
      spaceBetween={0}
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
    </Swiper>
  );
};

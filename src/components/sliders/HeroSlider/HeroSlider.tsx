import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './HeroSlider.module.css';

interface Image {
  src: string;
  alt: string;
  width: string;
  height: string;
}

import { ImageProps } from '@/sections/MainPage/HeroSection/images';

interface HeroSliderProps {
  images: ImageProps[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Autoplay, Pagination]}
      className={styles.heroSlider}
      spaceBetween={20}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.heroSlide}>
          <Image
            src={image.src}
            alt={image.alt}
            width='288'
            height='216'
            className={styles.photo}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

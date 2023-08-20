import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './HeroSlider.module.css';

// import imgD from 'public/images/hero/hero_01d.jpg';

interface Image {
  src: string;
  alt: string;
  width: string;
  height: string;
  // resolutions: {
  //   small: string;
  //   medium: string;
  //   large: string;
  // };
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
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.heroSlide}>
          <Image
            src={image.src}
            alt={image.alt}
            layout='fill'
            objectFit='cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

//              <picture>
//               <source
//                 srcSet={image.resolutions.large}
//                 media='(min-width: 1440px)'
//               />
//               <source
//                 srcSet={image.resolutions.medium}
//                 media='(min-width: 768px)'
//               />
//               <img src={image.resolutions.small} alt={image.alt} />
//             </picture>
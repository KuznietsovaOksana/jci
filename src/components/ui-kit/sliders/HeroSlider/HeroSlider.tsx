import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HeroSlider.module.css';
import { Autoplay, Pagination } from 'swiper';

interface Image {
  src: string;
  alt: string;
  resolutions: {
    small: string;
    medium: string;
    large: string;
  };
}

interface HeroSliderProps {
  images: Image[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  return (
    <>
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
            <picture>
              <source
                srcSet={image.resolutions.large}
                media='(min-width: 1440px)'
              />
              <source
                srcSet={image.resolutions.medium}
                media='(min-width: 768px)'
              />
              <img src={image.resolutions.small} alt={image.alt} />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;

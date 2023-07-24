import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';

import styles from './ProjectSlider.module.css';
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

interface ProjectSliderProps {
  array: string[];
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ array }) => {
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
        className={styles.projectSlider}
      >
        {array.map((image, index) => (
          <SwiperSlide key={index} className={styles.projectSlide}>
            <MediaQuery maxWidth={767}>
              <Image
                src={image}
                alt='Project photo'
                priority
                className={styles.project_img}
                width={252}
                height={234}
                style={{ objectFit: 'cover' }}
              />
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <Image
                src={image}
                alt='Project photo'
                priority
                className={styles.project_img}
                width={552}
                height={435}
                style={{ objectFit: 'cover' }}
              />
            </MediaQuery>
            <MediaQuery minWidth={1440}>
              <Image
                src={image}
                alt='Project photo'
                priority
                className={styles.project_img}
                width={552}
                height={488}
                style={{ objectFit: 'cover' }}
              />
            </MediaQuery>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

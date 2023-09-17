import React from 'react';
import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './CompletedIntroCard.module.css';

// import { ImageProps } from '@/sections/CurrentProjectPage/CompletedIntroSection/data';

// interface CompletedIntroCard {
//   images: ImageProps[];
// }
interface CompletedIntroCardProps {
  imgSrc: string;
  imgAlt: string;
}
// export const CompletedIntroCard: React.FC<CompletedIntroCard> = ({
//   imageSrc, imageAlt
// }) => {
// export const CompletedIntroCard = (imgSrc, imgAlt) => {
export const CompletedIntroCard: React.FC<CompletedIntroCardProps> = ({
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className={styles.currentProjectSlider}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width='287'
        height='225'
        className={styles.photo}
        style={{ objectFit: 'cover', filter: 'contrast(50%)' }}
        priority
      />
      <p className={styles.text_picture}>Completed Project</p>
    </div>
  );
};

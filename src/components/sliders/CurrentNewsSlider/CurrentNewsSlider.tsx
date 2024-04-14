import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';

import { SliderNewsProps } from './SliderNewsProps';
import { useLocalization } from '@/contexts/LocalizationContext';

import s from './CurrentNewsSlider.module.css';

export const CurrentNewsSlider: React.FC<SliderNewsProps> = ({ images }) => {
  const { locale } = useLocalization();
  return (
    <Swiper
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={s.currentNewsSlider}
      spaceBetween={0}
      navigation={{
        prevEl: '.currProjSliderBtnPrev',
        nextEl: '.currProjSliderBtnNext',
      }}
    >
      {images.map(image => (
        <SwiperSlide key={image.id} className={s.currentNewsSlider}>
          <Image
            src={image.photo}
            alt={locale === 'uk' ? image.alt_text_uk : image.alt_text_en}
            width={552}
            height={176}
            style={{ objectFit: 'cover' }}
            className={s.photo}
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

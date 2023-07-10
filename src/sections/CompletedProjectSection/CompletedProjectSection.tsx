import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';
import Arrow from 'public/icons/arrow-right.svg';

import { cards } from './cards';

import s from './CopmpletedProjectSection.module.css';
import { CompletedCard } from '@/components/CompletedCard';

export const CompleteProjectSection = () => {
  return (
    <Section>
      <Container>
        <h3 className={s.news_title}>
          <span className={s.news_title_span}>Successful projects: </span>
          building a better future together
        </h3>
        <div className='newsSliderContainer'>
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={24}
            // pagination={{
            // type: "fraction",
            // }}
            navigation={{
              prevEl: '.newsSliderBtnPrev',
              nextEl: '.newsSliderBtnNext',
            }}
            modules={[Navigation]}
            className='newsSlider'
            breakpoints={{
              320: {
                // effect: 'coverflow',
                // coverflowEffect: {
                //   rotate: 0,
                //   stretch: 0,
                //   depth: 100,
                //   modifier: 1,
                // },
                slidesPerView: 1,
                spaceBetween: 16,
                slidesPerGroup: 1,
              },
              768: {
                // slidesPerView: 2,
                slidesPerView: 1,
                spaceBetween: 24,

                // slidesPerGroup: 2,
                slidesPerGroup: 1,
              },
              1440: {
                // slidesPerView: 3,
                slidesPerView: 2,
                spaceBetween: 24,
                // slidesPerGroup: 3,
                slidesPerGroup: 2,
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <CompletedCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='newsSliderNavBtns'>
            <div className='newsSliderBtnPrev'>
              <LeftArrow />
            </div>
            <div className='newsSliderBtnNext'>
              <RightArrow />
            </div>
          </div>
        </div>
      </Container>
      {/* <div className='navigateBtns'>
        <div className='newsSliderBtnPrev'><LeftArrow /></div>
        <div className='newsSliderBtnNext'><RightArrow /></div>
      </div>         */}
    </Section>
  );
};

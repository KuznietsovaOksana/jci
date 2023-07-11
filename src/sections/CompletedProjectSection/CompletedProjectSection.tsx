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
import dynamic from 'next/dynamic';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const CompleteProjectSection = () => {
  return (
    <Section>
      <MediaQuery maxWidth={1439.9}>
        <Container>
          <h3 className={s.completed_project_title}>
            <span className={s.completed_project_title_span}>
              Successful projects:{' '}
            </span>
            building a better future together
          </h3>
        </Container>
        <div className='projectSliderContainer sliderContainerTablet'>
          <div className='projectSliderCards sliderCardsTablet'>
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <CompletedCard card={card} />
                {/* <MediaQuery minWidth={768}> */}
                <div className={s.div_tablet}></div>
                {/* </MediaQuery> */}
              </SwiperSlide>
            ))}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1440}>
        <Container>
          <h3 className={s.completed_project_title}>
            <span className={s.completed_project_title_span}>
              Successful projects:{' '}
            </span>
            building a better future together
          </h3>
          <div className='newsSliderContainer '>
            <Swiper
              slidesPerView={3}
              slidesPerGroup={3}
              spaceBetween={24}
              navigation={{
                prevEl: '.newsSliderBtnPrev',
                nextEl: '.newsSliderBtnNext',
              }}
              modules={[Navigation]}
              className='newsSlider'
              breakpoints={{
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 24,
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
      </MediaQuery>
    </Section>
  );
};

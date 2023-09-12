import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});
import { useTranslation } from 'next-i18next';

import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';

import { Title } from '@/components/typography/Title';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { cards } from './cards';
import { CompletedCard } from '@/components/cards/CompletedCard';

import s from './CopmpletedProjectSection.module.css';

export const CompleteProjectSection = () => {
  const { t } = useTranslation('projectsPage');

  return (
    <Section className={s.section}>
      <MediaQuery maxWidth={1439.9}>
        <Container>
          <Title className={s.completed_project_title}>
            <span className={s.completed_project_title_span}>
              {t('completed.span')}
            </span>
            {t('completed.title')}
          </Title>
        </Container>
        <div className='projectSliderContainer sliderContainerTablet'>
          <div className='projectSliderCards sliderCardsTablet'>
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <CompletedCard card={card} />
                <div className={s.div_tablet}></div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1440}>
        <Container>
          <h3 className={s.completed_project_title}>
            <span className={s.completed_project_title_span}>
              {t('completed.span')}
            </span>
            {t('completed.title')}
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

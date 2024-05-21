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
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
// import { cards } from './cards';
import { OtherProjectCard } from '@/components/cards/OtherProjectCard';

import s from './OtherProjectsSection.module.css';
import { IProjects } from '@/sections/ProjectsPage/lProjectsProps';

export const OtherProjectsSection = ({ projects }: IProjects) => {
  const { t } = useTranslation('projectPage');

  projects = projects.filter(item => !item.done);

  return (
    <Section>
      <MediaQuery maxWidth={1439.9}>
        <Container>
          <h3 className={s.other_project_title}>
            <span className={s.other_project_title_span}>
              {t('other.span')}
            </span>
            {t('other.title')}
          </h3>
          <p className={s.other_project_paragraph}>{t('other.text')}</p>
        </Container>
        <div className='projectSliderContainer sliderContainerTablet'>
          <div className='projectSliderCards sliderCardsTablet'>
            {projects.map(card => (
              <SwiperSlide key={card.id}>
                <OtherProjectCard card={card} />
                <div className={s.div_tablet}></div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1440}>
        <Container>
          <h3 className={s.other_project_title}>
            <span className={s.other_project_title_span}>
              {t('other.span')}
            </span>
            {t('other.title')}
          </h3>
          <p className={s.other_project_paragraph}>{t('other.text')}</p>
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
              {projects.map(card => (
                <SwiperSlide key={card.id}>
                  <OtherProjectCard card={card} />
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

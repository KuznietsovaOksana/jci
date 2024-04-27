import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { NewsCard } from '@/components/cards/NewsCard';
import { Title } from '@/components/typography/Title';
import { IconButton } from '@/components/buttons/IconButton';

import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';

// import { cards } from './cards';
import s from './NewsSection.module.css';
import { ILatestMewsProps } from '@/sections/NewsPage/LatestNewsSection/latestNewsProps';
import { router } from '@/utils/routes';

export const NewsSection = ({ newsData }: ILatestMewsProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { t: mainPageT } = useTranslation('mainPage');
  const { t: commonT } = useTranslation('common');

  const shortNewsData = newsData.slice(0, 12);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section className={s.section}>
      <Container>
        <Title className={s.news_title}>
          <span className={s.news_title_span}>{mainPageT('news.span')}</span>
          {mainPageT('news.title')}
        </Title>
      </Container>

      {isMobile && (
        <>
          <div className='newsSliderContainer'>
            <div className='newsSliderCards'>
              {shortNewsData.map(card => (
                <SwiperSlide key={card.id}>
                  <NewsCard card={card} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </>
      )}

      {!isMobile && (
        <Container>
          <div className='newsSliderContainer'>
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                  slidesPerGroup: 2,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  slidesPerGroup: 3,
                },
              }}
            >
              {shortNewsData.map(card => (
                <SwiperSlide key={card.id}>
                  <NewsCard card={card} />
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
      )}

      <Container>
        <div className={s.button_wrapper}>
          <IconButton href={router.NEWS} text={commonT('buttons.allNews')} />
        </div>
      </Container>
    </Section>
  );
};

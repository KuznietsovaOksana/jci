import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { NewsCard } from '../../components/ui-kit/cards/NewsCard';
import { cards } from './cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import s from './NewsSection.module.css';
import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';
import Arrow from 'public/icons/arrow-right.svg';



export const NewsSection = () => {
  return (
    <Section>
      <Container>
        <h3 className={s.news_title}>
          <span className={s.news_title_span}>News</span>: Learn about our activities
        </h3>
        <div className="newsSliderContainer">
          <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={24}
          pagination={{
          type: "fraction",
          }}
          navigation={{
              prevEl: '.newsSliderBtnPrev',
              nextEl: '.newsSliderBtnNext',
            }}
          modules={[Navigation]}
          className='newsSlider'
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <NewsCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='newsSliderNavBtns'>
            <div className='newsSliderBtnPrev'><LeftArrow /></div>
            <div className='newsSliderBtnNext'><RightArrow /></div>
          </div>  
        </div>
        <div className={s.button_wrapper}>
          <a href='#' className={s.news_link}>
            Go to all news
          </a>
          <Arrow className={s.button_icon} />
        </div>
      </Container>
      {/* <div className='navigateBtns'>
        <div className='newsSliderBtnPrev'><LeftArrow /></div>
        <div className='newsSliderBtnNext'><RightArrow /></div>
      </div>         */}
    </Section>
  );
};

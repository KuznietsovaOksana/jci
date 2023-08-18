import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { NewsCard } from '@/components/cards/NewsCard';

import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';
import Arrow from 'public/icons/arrow-right.svg';

import { cards } from './cards';
import s from './NewsSection.module.css';

export const NewsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section className={s.section}>
      <Container>
        <h3 className={s.news_title}>
          <span className={s.news_title_span}>News</span>: Learn about our
          activities
        </h3>
      </Container>

      {isMobile && (
        <>
          <div className='newsSliderContainer'>
            <div className='newsSliderCards'>
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <NewsCard card={card} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </>
      )}

      {isNotMobile && (
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
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
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
          <a href='#' className={s.news_link}>
            Go to all news
          </a>
          <Arrow className={s.button_icon} />
        </div>
      </Container>
    </Section>
  );
};

//  return (
//     <Section>
//       {isMobile && (
//         <>
//           <Container>
//             <h3 className={s.news_title}>
//               <span className={s.news_title_span}>News</span>: Learn about our
//               activities
//             </h3>
//           </Container>
//           <div className='newsSliderContainer'>
//             <div className='newsSliderCards'>
//               {cards.map((card, index) => (
//                 <SwiperSlide key={index}>
//                   <NewsCard card={card} />
//                 </SwiperSlide>
//               ))}
//             </div>
//           </div>
//           <Container>
//             <div className={s.button_wrapper}>
//               <a href='#' className={s.news_link}>
//                 Go to all news
//               </a>
//               <Arrow className={s.button_icon} />
//             </div>
//           </Container>
//         </>
//       )}

//       {isNotMobile && (
//         <Container>
//           <h3 className={s.news_title}>
//             <span className={s.news_title_span}>News</span>: Learn about our
//             activities
//           </h3>
//           <div className='newsSliderContainer'>
//             <Swiper
//               slidesPerView={3}
//               slidesPerGroup={3}
//               spaceBetween={24}
//               navigation={{
//                 prevEl: '.newsSliderBtnPrev',
//                 nextEl: '.newsSliderBtnNext',
//               }}
//               modules={[Navigation]}
//               className='newsSlider'
//               breakpoints={{
//                 768: {
//                   slidesPerView: 2,
//                   spaceBetween: 24,
//                   slidesPerGroup: 2,
//                 },
//                 1440: {
//                   slidesPerView: 3,
//                   spaceBetween: 24,
//                   slidesPerGroup: 3,
//                 },
//               }}
//             >
//               {cards.map((card, index) => (
//                 <SwiperSlide key={index}>
//                   <NewsCard card={card} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className='newsSliderNavBtns'>
//               <div className='newsSliderBtnPrev'>
//                 <LeftArrow />
//               </div>
//               <div className='newsSliderBtnNext'>
//                 <RightArrow />
//               </div>
//             </div>
//           </div>
//           <div className={s.button_wrapper}>
//             <a href='#' className={s.news_link}>
//               Go to all news
//             </a>
//             <Arrow className={s.button_icon} />
//           </div>
//         </Container>
//       )}
//     </Section>
//   );
// };

import { useScreen } from '@/hooks/use_screen';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

// import { cards } from './cards';
import { BenefitsOfMembership } from './sectionTypes';
import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';
import Icon1 from 'public/icons/icongrow1.svg';
import Icon2 from 'public/icons/iconinternational2.svg';
import Icon3 from 'public/icons/iconbusiness3.svg';
import Icon4 from 'public/icons/iconnetwork4.svg';
import Icon5 from 'public/icons/iconsocial5.svg';
import s from './BenefitsOfMembershipSection.module.css';
import { BenefitCard } from '@/components/cards/BenefitCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

export const BenefitsOfMembershipSection = () => {
  const { t, i18n } = useTranslation('whoWeArePage');
  const items = t('benefits_of_membership', {
    returnObjects: true,
    defaultValue: '',
  }) as BenefitsOfMembership;

  const [isMounted, setIsMounted] = useState(false);
  const { isMobileTablet } = useScreen();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const isUkrainian = i18n.language === 'uk';

  const icons = [
    <Icon1 key='0' className={s.card_icon} />,
    <Icon2 key='1' className={s.card_icon} />,
    <Icon3 key='2' className={s.card_icon} />,
    <Icon4 key='3' className={s.card_icon} />,
    <Icon5 key='4' className={s.card_icon} />,
  ];

  const cardsArray = items.cards.map((item, index) => {
    return {
      card: item,
      icon: icons[index],
    };
  });

  return (
    <Section>
      <Container>
        <div className={s.title}>
          <div className={s.title2}>
            <Title tag='h2' isBlue>
              {items.title[0]}
            </Title>
            <Title tag='h2'>{items.title[1]}</Title>
          </div>
          <Title tag='h2'>{items.title[2]}</Title>
        </div>
      </Container>
      {!isMobileTablet && (
        // <div className={s.cardsBlock}>
        //   {cardsArray.map(({ card , icon }, index) => (
        //       <BenefitCard
        //       key={index}
        //       icon={icon}
        //       title={card.title}
        //       text={card.text}
        //       isUkrainian={isUkrainian}/>
        //   ))}
        // </div>
        <Container>
          <div className='newsSliderContainer' style={{ marginTop: '24px' }}>
            <Swiper
              slidesPerView={2}
              slidesPerGroup={2}
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
              {cardsArray.map(({ card, icon }, index) => (
                <SwiperSlide key={index}>
                  <BenefitCard
                    key={index}
                    icon={icon}
                    title={card.title}
                    text={card.text}
                    isUkrainian={isUkrainian}
                  />
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

      {isMobileTablet && (
        // {classNames(s.cardsBlock, { [s.cardsBlockUa]: isUkrainian })}
        //  <div className={s.cardsBlock} >
        <div className={`${s.cardsBlock} ${isUkrainian ? s.cardsBlockUa : ''}`}>
          {cardsArray.map(({ card, icon }, index) => (
            <BenefitCard
              key={index}
              icon={icon}
              title={card.title}
              text={card.text}
              isUkrainian={isUkrainian}
            />
          ))}
        </div>
      )}
    </Section>
  );
};

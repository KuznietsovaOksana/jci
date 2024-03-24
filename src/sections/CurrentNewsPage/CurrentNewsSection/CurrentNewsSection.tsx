import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { useLocalization } from '@/contexts/LocalizationContext';
import { useScreen } from '@/hooks/use_screen';
import { formatDate } from '@/services/dateFormat';

import XLogo from 'public/icons/x.svg';
import FbLogo from 'public/icons/facebook.svg';
import InLogo from 'public/icons/in.svg';
import TelegramLogo from 'public/icons/telegram2.svg';
import WhatsappLogo from 'public/icons/whatsapp2.svg';
import ArrowRight from 'public/icons/chevron.svg';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';
import { Tabs } from '@/components/common/Tabs';

import { ICurrentMewsProps } from './currentNewsProps';

import s from './CurrentNewsSection.module.css';

export const CurrentNewsSection = ({
  news,
  currentNews,
}: ICurrentMewsProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isMobile, isTablet, isDesk } = useScreen();
  const { locale } = useLocalization();
  // for last 3 new news
  const lastFourNews = news.slice(-4);
  const index = lastFourNews.findIndex(item => item.id === currentNews.id);
  if (index !== -1) {
    lastFourNews.splice(index, 1);
  }
  const recentNews = lastFourNews.slice(-3);
  // for last 3 new news

  //
  // console.log(currentNews);
  // console.log(recentNews);
  //
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  const tabs =
    locale === 'en'
      ? ['Overview', 'Agenda', 'Partners', 'Contact Information']
      : ['Огляд', 'Порядок денний', 'Партнери', 'Контактна інформація'];
  return (
    <Section className={s.first_section}>
      <Container>
        <div className={s.nav}>
          <span>{locale === 'en' ? 'Home' : 'Домашня сторінка'}</span>
          <div className={s.arrow}>
            <ArrowRight />
          </div>
          <span>{locale === 'en' ? 'News' : 'Новини'}</span>
          <div className={s.arrow}>
            <ArrowRight />
          </div>
          <span className={s.news_page}>
            {locale === 'en' ? 'News Page' : 'Сторінка Новини'}
          </span>
        </div>
        <Title isBlue className={s.title_main} tag='h1'>
          {locale === 'en' ? currentNews.title_en : currentNews.agenda_uk}
        </Title>
        <div className={s.block_for_desk}>
          <div>
            <div className={s.block}>
              <div className={s.data}>
                <div className={s.datePrimary}>
                  <p className={s.date}>{formatDate(currentNews.start_date)}</p>
                  <span className={s.decor}>|</span>
                  <p className={s.location}>
                    {locale === 'uk'
                      ? currentNews.location_uk
                      : currentNews.location_en}
                  </p>
                </div>
                <span className={s.decorCircle}>&#8226;</span>
                <p className={s.level}>{currentNews.event_category}</p>
              </div>
              <Image
                className={s.picture}
                src={currentNews.multimedia[0].photo}
                width={552}
                height={176}
                alt={
                  locale === 'uk'
                    ? currentNews.multimedia[0].alt_text_uk
                    : currentNews.multimedia[0].alt_text_en
                }
                style={{ objectFit: 'cover' }}
              />
            </div>
            <Tabs type='news' tabs={{ tabs }} data={currentNews} />
            <div className={s.logos_list}>
              <a
                className={s.logo_icon}
                href=''
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <FbLogo className={s.logo} />
              </a>
              <a
                className={s.logo_icon}
                href=''
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <XLogo className={s.logo} />
              </a>
              <a
                className={s.logo_icon}
                href=''
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <InLogo className={s.logo} />
              </a>
              <a
                className={s.logo_icon}
                href=''
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <TelegramLogo className={s.logo} />
              </a>
              <a
                className={s.logo_icon}
                href=''
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <WhatsappLogo className={s.logo} />
              </a>
            </div>
          </div>
          <div>
            <h2 className={s.title_second}>
              {locale === 'en' ? 'Other News' : 'Iнші Новини'}
            </h2>
            {isDesk && (
              <div className={s.news_desk_block}>
                {recentNews.map(newsItem => (
                  <div key={newsItem.id}>
                    <Link href={`/news/${newsItem.id}`} className={s.card_desk}>
                      <div className={`${s.data} ${s.data_desk}`}>
                        <div className={s.datePrimary}>
                          <p className={s.date}>
                            {formatDate(newsItem.start_date)}
                          </p>
                          <span className={s.decor}>|</span>
                          <p className={s.location}>
                            {locale === 'uk'
                              ? newsItem.location_uk
                              : newsItem.location_en}
                          </p>
                        </div>
                        <span className={s.decorCircle}>&#8226;</span>
                        <p className={s.level}>{newsItem.event_category}</p>
                      </div>

                      <div className={s.info}>
                        <h3 className={s.title}>
                          {locale === 'uk'
                            ? newsItem.title_uk
                            : newsItem.title_en}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
      {isMobile && (
        <>
          <div className='newsSliderContainer'>
            <div className='newsSliderCards'>
              {recentNews.map(newsItem => (
                <SwiperSlide key={newsItem.id}>
                  <Link href={`/news/${newsItem.id}`} className={s.card}>
                    <Image
                      className={`${s.picture}  ${s.picture_other}`}
                      src={newsItem.multimedia[0].photo}
                      width={552}
                      height={318}
                      alt={
                        locale === 'uk'
                          ? newsItem.multimedia[0].alt_text_uk
                          : newsItem.multimedia[0].alt_text_en
                      }
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={s.textblock}>
                      <div className={s.data}>
                        <div className={s.datePrimary}>
                          <p className={s.date}>
                            {formatDate(newsItem.start_date)}
                          </p>
                          <span className={s.decor}>|</span>
                          <p className={s.location}>
                            {locale === 'uk'
                              ? newsItem.location_uk
                              : newsItem.location_en}
                          </p>
                        </div>
                        <span className={s.decorCircle}>&#8226;</span>
                        <p className={s.level}>{newsItem.event_category}</p>
                      </div>

                      <div className={s.info}>
                        <h3 className={s.title}>
                          {locale === 'uk'
                            ? newsItem.title_uk
                            : newsItem.title_en}
                        </h3>
                        <p className={s.text}>
                          {locale === 'uk'
                            ? newsItem.overview_uk
                            : newsItem.overview_en}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </>
      )}

      {isTablet && (
        <Container>
          <div className={s.newsSliderContainer}>
            <div className={s.newsSliderCards}>
              {recentNews.map(newsItem => (
                <SwiperSlide key={newsItem.id}>
                  <div key={newsItem.id}>
                    <Link href={`/news/${newsItem.id}`} className={s.card}>
                      <Image
                        className={`${s.picture}  ${s.picture_other}`}
                        src={newsItem.multimedia[0].photo}
                        width={552}
                        height={318}
                        alt={
                          locale === 'uk'
                            ? newsItem.multimedia[0].alt_text_uk
                            : newsItem.multimedia[0].alt_text_en
                        }
                        style={{ objectFit: 'cover' }}
                      />
                      <div className={s.textblock}>
                        <div className={s.data}>
                          <div className={s.datePrimary}>
                            <p className={s.date}>
                              {formatDate(newsItem.start_date)}
                            </p>
                            <span className={s.decor}>|</span>
                            <p className={s.location}>
                              {locale === 'uk'
                                ? newsItem.location_uk
                                : newsItem.location_en}
                            </p>
                          </div>
                          <span className={s.decorCircle}>&#8226;</span>
                          <p className={s.level}>{newsItem.event_category}</p>
                        </div>

                        <div className={s.info}>
                          <h3 className={s.title}>
                            {locale === 'uk'
                              ? newsItem.title_uk
                              : newsItem.title_en}
                          </h3>
                          <p className={s.text}>
                            {locale === 'uk'
                              ? newsItem.overview_uk
                              : newsItem.overview_en}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Container>
      )}
    </Section>
  );
};

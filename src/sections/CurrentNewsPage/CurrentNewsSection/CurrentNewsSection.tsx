import Image from 'next/image';
import { useLocalization } from '@/contexts/LocalizationContext';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import { ICurrentMewsProps } from './currentNewsProps';

import { formatDate } from '@/services/dateFormat';
// import Link from 'next/link';
import { Tabs } from '@/components/common/Tabs';
import XLogo from 'public/icons/x.svg';
import FbLogo from 'public/icons/facebook.svg';
import InLogo from 'public/icons/in.svg';
import TelegramLogo from 'public/icons/telegram2.svg';
import WhatsappLogo from 'public/icons/whatsapp2.svg';
import ArrowRight from 'public/icons/chevron.svg';

import s from './CurrentNewsSection.module.css';

export const CurrentNewsSection = ({
  news,
  currentNews,
}: ICurrentMewsProps) => {
  console.log(news);
  const { locale } = useLocalization();
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
          <div className={s.block_two_for_desk}>
            <h2 className={s.title_second}>
              {locale === 'en' ? 'Other News' : 'Iнші Новини'}
            </h2>

            {/* <ul className={s.list_news}>
          {news.map(newsItem => (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.id}`} className={s.card}>
                <Image
                  className={s.picture}
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
                      {locale === 'uk' ? newsItem.title_uk : newsItem.title_en}
                    </h3>
                    <p className={s.text}>
                      {locale === 'uk'
                        ? newsItem.overview_uk
                        : newsItem.overview_en}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};

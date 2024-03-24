import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocalization } from '@/contexts/LocalizationContext';
import IconMore from 'public/icons/button_more.svg';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import { ILatestMewsItem, ILatestMewsProps } from './latestNewsProps';

import s from './LatestNewsSection.module.css';
import { formatDate } from '@/services/dateFormat';
import Link from 'next/link';

export const LatestNewsSection = ({ newsData }: ILatestMewsProps) => {
  const { locale } = useLocalization();

  const { t } = useTranslation('newsPage');

  const [selectedOption, setSelectedOption] = useState<string>('all');

  // pagination  front
  const [page, setPage] = useState(1);
  const [currentNews, setCurrentNews] = useState<ILatestMewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<ILatestMewsItem[]>([]);
  const itemsPerPage = page === 1 ? 5 : 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  useEffect(() => {
    setCurrentNews([]);
    const filtered =
      selectedOption === 'all'
        ? newsData
        : newsData.filter(
            newsItem => newsItem.event_category === selectedOption
          );
    setFilteredNews(filtered);
    const newCurrentNews = filtered.slice(0, endIndex);
    setCurrentNews(prevCurrentNews => [...prevCurrentNews, ...newCurrentNews]);
  }, [page, newsData, endIndex, selectedOption]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  // pagination front
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setPage(1);
  };
  return (
    <Section className={s.first_section}>
      <Container>
        <Title isBlue className={s.title_main}>
          {t('latest_news_section.title')}
        </Title>

        <div>
          <select
            className={s.select}
            id='newsSelect'
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option className={s.option} value='all'>
              {t('latest_news_section.category.0')}
            </option>
            <option className={s.option} value='local'>
              {t('latest_news_section.category.1')}
            </option>
            <option className={s.option} value='international'>
              {t('latest_news_section.category.2')}
            </option>
          </select>
        </div>
        <div>
          <ul className={s.list_news}>
            {currentNews.map(newsItem => (
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
              </li>
            ))}
          </ul>
          {filteredNews.length > endIndex && (
            <button type='button' onClick={handleLoadMore} className={s.button}>
              {t('latest_news_section.button')}
              <IconMore className={`${s.icon_more} ${s.rotate}`} />
            </button>
          )}
        </div>
      </Container>
    </Section>
  );
};

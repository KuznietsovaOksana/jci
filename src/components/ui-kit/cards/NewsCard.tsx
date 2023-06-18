import React from 'react';
import css from './NewsCard.module.css';

interface Card {
  picture: {
    src: string;
    alt: string;
    resolutions: {
      small: string;
      medium: string;
      large: string;
    };
  };
  data: {
    date: string;
    location: string;
    level: string;
  };
  title: string;
  text: string;
}

interface NewsCardProps {
  cards: Card[];
}

export const NewsCard: React.FC<NewsCardProps> = ({ cards }) => {
  return (
    <>
      <div className={css.newsCards}>
        {cards.map((card, index) => (
          <div key={index} className={css.card}>
            <div className={css.picture}>
              <picture>
                <source
                  srcSet={card.picture.resolutions.large}
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={card.picture.resolutions.medium}
                  media='(min-width: 768px)'
                />
                <img
                  src={card.picture.resolutions.small}
                  alt={card.picture.alt}
                />
              </picture>
            </div>
            <div className={css.textblock}>
              <div className={css.data}>
                <div className={css.datePrimary}>
                  <p className={css.date}>{card.data.date}</p>
                  <span className={css.decor}>|</span>
                  <p className={css.location}>{card.data.location}</p>
                </div>
                <span className={css.decorCircle}>&#8226;</span>
                <p className={css.level}>{card.data.level}</p>
              </div>
              <div className={css.info}>
                <h3 className={css.title}>{card.title}</h3>
                <p className={css.text}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

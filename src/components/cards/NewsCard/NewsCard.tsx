import React from 'react';

import s from './NewsCard.module.css';

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

// interface NewsCardProps {
//   cards: Card[];
// }

interface NewsCardProps {
  card: Card;
}
export const NewsCard: React.FC<NewsCardProps> = ({ card }) => {
  return (
    <>
      <a href='#' className={s.card} >
        <div className={s.picture}>
          <picture>
            <source
              srcSet={card.picture.resolutions.large}
              media='(min-width: 1440px)'
            />
            <source
              srcSet={card.picture.resolutions.medium}
              media='(min-width: 768px)'
            />
            <img src={card.picture.resolutions.small} alt={card.picture.alt} />
          </picture>
        </div>
        <div className={s.textblock}>
          <div className={s.data}>
            <div className={s.datePrimary}>
              <p className={s.date}>{card.data.date}</p>
              <span className={s.decor}>|</span>
              <p className={s.location}>{card.data.location}</p>
            </div>
            <span className={s.decorCircle}>&#8226;</span>
            <p className={s.level}>{card.data.level}</p>
          </div>
          <div className={s.info}>
            <h3 className={s.title}>{card.title}</h3>
            <p className={s.text}>{card.text}</p>
          </div>
        </div>
      </a>

      {/* <div className={s.card} tabIndex={1} >
        <div className={s.picture}>
          <picture>
            <source
              srcSet={card.picture.resolutions.large}
              media='(min-width: 1440px)'
            />
            <source
              srcSet={card.picture.resolutions.medium}
              media='(min-width: 768px)'
            />
            <img src={card.picture.resolutions.small} alt={card.picture.alt} />
          </picture>
        </div>
        <div className={s.textblock}>
          <div className={s.data}>
            <div className={s.datePrimary}>
              <p className={s.date}>{card.data.date}</p>
              <span className={s.decor}>|</span>
              <p className={s.location}>{card.data.location}</p>
            </div>
            <span className={s.decorCircle}>&#8226;</span>
            <p className={s.level}>{card.data.level}</p>
          </div>
          <div className={s.info}>
            <h3 className={s.title}>{card.title}</h3>
            <p className={s.text}>{card.text}</p>
          </div>
        </div>
      </div> */}




      {/* <div className={s.newsCards}>
        {cards.map((card, index) => (
          <div key={index} className={s.card}>
            <div className={s.picture}>
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
            <div className={s.textblock}>
              <div className={s.data}>
                <div className={s.datePrimary}>
                  <p className={s.date}>{card.data.date}</p>
                  <span className={s.decor}>|</span>
                  <p className={s.location}>{card.data.location}</p>
                </div>
                <span className={s.decorCircle}>&#8226;</span>
                <p className={s.level}>{card.data.level}</p>
              </div>
              <div className={s.info}>
                <h3 className={s.title}>{card.title}</h3>
                <p className={s.text}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div> */}
    </>
  );
};

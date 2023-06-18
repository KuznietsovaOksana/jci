import css from './Together_section.module.css';
import { FC } from 'react';

const togetherData = [
  {
    title: '1.5m+',
    text: 'UAH JCI Ukraine spent on aid in 2022',
  },
  {
    title: '9k+',
    text: 'Ukrainians received help from JCI Ukraine in 2022',
  },
  {
    title: '25+',
    text: 'Partner countries worldwide',
  },
];

const TogetherSection: FC = () => {
  return (
    <section className={css.together_section}>
      <h2 className={css.together_title}>
        Together, we can make a positive impact on the world
      </h2>
      <ul className={css.together_list}>
        {togetherData.map(({ title, text }, index) => (
          <li className={css.together_item} key={index}>
            <h3 className={css.together_item_title}>{title}</h3>
            <p className={css.together_item_text}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TogetherSection;

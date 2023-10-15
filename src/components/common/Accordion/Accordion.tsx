import React, { useState } from 'react';

import ArrowUp from 'public/icons/chevron_Up.svg';

import { useLocalization } from '@/contexts/LocalizationContext';

import { AccordionProps } from './Accordion.props';
import s from './Accordion.module.css';

export const Accordion: React.FC<AccordionProps> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { locale } = useLocalization();

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      // Close the question if it's already open
      setActiveIndex(null);
    } else {
      // Open a new question
      setActiveIndex(index);
    }
  };

  return (
    <ul className={s.faqlist}>
      {faqData?.map((faq, index) => (
        <li
          className={s.faqitem}
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className={s.box}>
            <h3 className={s.question}>
              {locale === 'uk' ? faq.question_uk : faq.question_en}
            </h3>
            <ArrowUp
              className={`${s.arrow} ${activeIndex === index ? s.up : s.down}`}
              width={24}
            />
          </div>
          {activeIndex === index && (
            <p className={s.answer}>
              {locale === 'uk' ? faq.answer_uk : faq.answer_en}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

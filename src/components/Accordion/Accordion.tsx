import React, { useState } from 'react';

import ArrowUp from 'public/icons/chevron_Up.svg';

import s from './Accordion.module.css';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  faqs: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      // Закрити питання, якщо воно вже відкрите
      setActiveIndex(null);
    } else {
      // Відкрити нове питання
      setActiveIndex(index);
    }
  };

  return (
    <ul className={s.faqlist}>
      {faqs.map((faq, index) => (
        <li className={s.faqitem} key={index}>
          <div className={s.box} onClick={() => handleClick(index)}>
            <h3 className={s.question}>{faq.question}</h3>
            <ArrowUp
              className={`${s.arrow} ${activeIndex === index ? s.up : s.down}`}
              width={24}
            />
          </div>
          {activeIndex === index && <p className={s.answer}>{faq.answer}</p>}
        </li>
      ))}
    </ul>
  );
};

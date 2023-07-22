import { Container } from '@/components/Container';

import { togetherData } from './data';

import s from './TogetherSection.module.css';

export const TogetherSection = () => {
  return (
    <section className={s.together_section}>
      <Container>
        <h2 className={s.together_title}>
          Together, we can make a positive impact on the world
        </h2>
        <ul className={s.together_list}>
          {togetherData.map(({ title, text }, index) => (
            <li className={s.together_item} key={index}>
              <h3 className={s.together_item_title}>{title}</h3>
              <p className={s.together_item_text}>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

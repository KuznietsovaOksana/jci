import React from 'react';

import { Container } from '@/components/common/Container';
import { MainButton } from '@/components/buttons/MainButton';
import { Title } from '@/components/typography/Title';

import s from './DonateSectionComponent.module.css';

interface TextProps {
  heading: string;
}

export const DonateSectionComponent: React.FC<TextProps> = ({ heading }) => {
  return (
    <section className={s.donate_section}>
      <Container>
        <Title className={s.donate_text}>{heading}</Title>
        <MainButton
          className={s.donate_btn}
          text='Donate'
          style='secondaryNavy'
        />
      </Container>
    </section>
  );
};

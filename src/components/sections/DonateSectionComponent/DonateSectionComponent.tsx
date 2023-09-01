import React from 'react';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { MainButton } from '@/components/buttons/MainButton';
import { Title } from '@/components/typography/Title';

import { TextProps } from './DonateSectionComponent.props';
import s from './DonateSectionComponent.module.css';

export const DonateSectionComponent: React.FC<TextProps> = ({ heading }) => {
  const { t } = useTranslation('common');

  return (
    <section className={s.donate_section}>
      <Container>
        <Title className={s.donate_text}>{heading}</Title>
        <MainButton
          className={s.donate_btn}
          text={t('buttons.donate')}
          style='secondaryNavy'
        />
      </Container>
    </section>
  );
};

import React from 'react';
import css from './Hero_section.module.css';
import { MainButton } from '../ui-kit/buttons/MainButton/MainButton';

export const HeroSection = () => {
  return (
    <div>
      <MainButton type='button' text='Join us' style='primary' paddings={60} />
      <MainButton
        type='button'
        text='Donate'
        style='secondary'
        paddings={150}
      />
      <MainButton type='button' text='Read more' style='primary' />
    </div>
  );
};

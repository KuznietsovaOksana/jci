import React from 'react';
import css from './Hero_section.module.css';
import { MainButton } from '../ui-kit/buttons/MainButton/MainButton';
import HeroSlider from '../ui-kit/sliders/HeroSlider/HeroSlider';


interface Image {
  src: string;
  alt: string;
  resolutions: {
    small: string;
    medium: string;
    large: string;
  };
}

const images: Image[] = [
  {
    src: "/images/hero/hero_01d.jpg",
    alt: "Image 1",
    resolutions: {
      small: "/images/hero/hero_01m.jpg",
      medium: "/images/hero/hero_01t.jpg",
      large: "/images/hero/hero_01d.jpg",
    },
  },
  {
    src: "/images/hero/hero_02d.jpg",
    alt: "Image 2",
    resolutions: {
      small: "/images/hero/hero_02m.jpg",
      medium: "/images/hero/hero_02t.jpg",
      large: "/images/hero/hero_02d.jpg",
    },
  },
  {
    src: "/images/hero/hero_03d.jpg",
    alt: "Image 3",
    resolutions: {
      small: "/images/hero/hero_03m.jpg",
      medium: "/images/hero/hero_03t.jpg",
      large: "/images/hero/hero_03d.jpg",
    },
  },
];


export const HeroSection = () => {

  return (
    <div>
      <MainButton type='button' text='Join us' style='primary' paddings={60} />
      <MainButton type='button' text='Donate' style='secondary' paddings={150} />
      <MainButton type='button' text='Read more' style='primary' />
      <HeroSlider images={images}/>
    </div>
   
  );
};
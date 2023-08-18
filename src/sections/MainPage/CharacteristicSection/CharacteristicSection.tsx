import dynamic from 'next/dynamic';
import { NextPage } from 'next';

import { Container } from '@/components/common/Container';
import { CharacteristicCard } from '@/components/cards/CharacteristicCard';

import s from './CharacteristicSection.module.css';

const Care = dynamic(() => import('public/icons/caring_graphic.svg'));
const Help = dynamic(() => import('public/icons/helping_graphic.svg'));
const Reliable = dynamic(() => import('public/icons/reliable_graphic.svg'));
const Sustainable = dynamic(
  () => import('public/icons/sustainable_graphic.svg')
);
const Trusted = dynamic(() => import('public/icons/trusted_graphic.svg'));

interface Characteristic {
  icon: React.ReactNode;
  text: string;
}

const characteristicData: Characteristic[] = [
  { icon: <Reliable />, text: 'Reliable' },
  { icon: <Trusted />, text: 'Trusted' },
  { icon: <Care />, text: 'Caring' },
  { icon: <Help />, text: 'Helping' },
  { icon: <Sustainable />, text: 'Sustainable' },
];

export const CharacteristicSection: NextPage = () => {
  return (
    <section className={s.characteristic_section}>
      <Container>
        <ul className={s.characteristic_box}>
          {characteristicData.map((characteristic, index) => (
            <CharacteristicCard
              key={index}
              icon={characteristic.icon}
              text={characteristic.text}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

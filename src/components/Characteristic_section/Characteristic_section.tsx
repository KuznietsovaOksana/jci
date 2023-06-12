import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import CharacteristicCard from '../Characteristic_card/Characteristic_card';
import css from './Characteristic_section.module.css';

const Care = dynamic(() => import('public/icons/caring_graphic.svg'));
const Help = dynamic(() => import('public/icons/helping_graphic.svg'));
const Reliable = dynamic(() => import('public/icons/reliable_graphic.svg'));
const Sustainable = dynamic(
  () => import('public/icons/sustainable_graphic.svg')
);
const Trusted = dynamic(() => import('public/icons/trusted_graphic.svg'));

interface Characteristic {
  icon: any;
  text: string;
}

const characteristicData: Characteristic[] = [
  { icon: <Care />, text: 'Caring' },
  { icon: <Help />, text: 'Helping' },
  { icon: <Reliable />, text: 'Reliable' },
  { icon: <Sustainable />, text: 'Sustainable' },
  { icon: <Trusted />, text: 'Trusted' },
];

const CharacteristicSection: NextPage = () => {
  return (
    <section className={css.characteristic_section}>
      {characteristicData.map((characteristic, index) => (
        <CharacteristicCard
          key={index}
          icon={characteristic.icon}
          text={characteristic.text}
        />
      ))}
    </section>
  );
};

export default CharacteristicSection;

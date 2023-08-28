import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

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
  key: string;
}

const characteristicData: Characteristic[] = [
  { key: 'reliable', icon: <Reliable />, text: 'Reliable' },
  { key: 'trusted', icon: <Trusted />, text: 'Trusted' },
  { key: 'caring', icon: <Care />, text: 'Caring' },
  { key: 'helping', icon: <Help />, text: 'Helping' },
  { key: 'sustainable', icon: <Sustainable />, text: 'Sustainable' },
];

export const CharacteristicSection: NextPage = () => {
  const { t } = useTranslation('mainPage');
  return (
    <section className={s.characteristic_section}>
      <Container>
        <ul className={s.characteristic_box}>
          {characteristicData.map((characteristic, index) => (
            <CharacteristicCard
              key={index}
              icon={characteristic.icon}
              text={t(`characteristics.${characteristic.key}`)}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

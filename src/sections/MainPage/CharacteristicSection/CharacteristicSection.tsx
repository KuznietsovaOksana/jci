import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { CharacteristicCard } from '@/components/cards/CharacteristicCard';

import { characteristicData } from './data';
import s from './CharacteristicSection.module.css';

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

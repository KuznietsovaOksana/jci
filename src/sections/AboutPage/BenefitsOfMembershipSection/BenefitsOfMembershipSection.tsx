import { useScreen } from '@/hooks/use_screen';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { JciDevelopmentCard } from '@/components/cards/JciDevelopmentCard';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

// import { cards } from './cards';
import { BenefitsOfMembership } from './sectionTypes';
import Icon1 from 'public/icons/icongrow1.svg';
import Icon2 from 'public/icons/iconinternational2.svg';
import Icon3 from 'public/icons/iconbusiness3.svg';
import Icon4 from 'public/icons/iconnetwork4.svg';
import Icon5 from 'public/icons/iconsocial5.svg';
import s from './BenefitsOfMembershipSection.module.css';
import { BenefitCard } from '@/components/cards/BenefitCard';

export const BenefitsOfMembershipSection = () => {
  const { t } = useTranslation('whoWeArePage');
  const items = t('benefits_of_membership', {
    returnObjects: true,
    defaultValue: '',
  }) as BenefitsOfMembership;

  const [isMounted, setIsMounted] = useState(false);
  const { isMobile } = useScreen();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const icons = [
    <Icon1 key="0" className={s.card_icon}/>, 
    <Icon2  key="1" className={s.card_icon}/>, 
    <Icon3  key="2" className={s.card_icon}/>, 
    <Icon4  key="3" className={s.card_icon}/>, 
    <Icon5  key="4" className={s.card_icon}/>
  ];

  const cardsArray = items.cards.map((item, index) => {
        return {
            card: item,
            icon: icons[index]
        };
  });
console.log(cardsArray)
  


  return (
      <Section>
        <Container>
          <div className={s.title}>
            <div className={s.title2}>
              <Title tag='h2' isBlue>{items.title[0]}</Title>
              <Title tag='h2'>{items.title[1]}</Title>
            </div>
            <Title tag='h2'>{items.title[2]}</Title>
          </div>
          <div className={s.cardsBlock}>
            {cardsArray.map(({ card , icon }, index) => (
                <BenefitCard 
                key={index}
                icon={icon}
                title={card.title}
                text={card.text}/>
            ))} 
          </div>

        </Container>
      </Section>
  );
};

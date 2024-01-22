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
import icon2 from 'public/icons/iconinternational2.svg';
import icon3 from 'public/icons/iconbusiness3.svg';
import icon4 from 'public/icons/iconnetwork4.svg';
import icon5 from 'public/icons/iconsocial5.svg';
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
          <div className={s.card_icon}><Icon1 /></div>
          {items.cards.map(({ title, text }, index) => (
                  <BenefitCard 
                  key={index}
                  icon={Icon1}
                  title={title}
                  text={text}/>
          ))}

          
          
          {/* {!isMobile && (
            <>
              <div className={s.cardsBlock}>
                {cards.map(({ title, text, style }, index) => (
                  <JciDevelopmentCard
                    key={index}
                    title={title}
                    text={text}
                    style={style}
                  />
                ))}
              </div>
            </>
          )} */}
        </Container>
        {/* {isMobile && (
          <>
            <div className={s.cardsBlock}>
              {cards.map(({ title, text, style }, index) => (
                <JciDevelopmentCard
                  key={index}
                  title={title}
                  text={text}
                  style={style}
                />
              ))}
            </div>
          </>
        )} */}
      </Section>
  );
};

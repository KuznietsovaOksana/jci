import Image from 'next/image';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import impact from 'public/images/impact/impact_01.jpg';

import s from './ImpactSection.module.css';

export const ImpactSection = () => {
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.box}>
          <Title className={s.title}>
            More people More <span className={s.blue}>impact</span>
          </Title>
          <p className={s.description}>
            JCI Ukraine is a chapter of Junior Chamber International, a global
            organisation that empowers young people to create positive change in
            their communities through personal and professional development
            programs, social responsibility initiatives, and international
            networking opportunities. JCI Ukraine focuses on developing young
            leaders who can make a positive impact on society and the world.
          </p>
        </div>
        <Image
          src={impact}
          alt='Members of the organization'
          className={s.photo}
        />
      </Container>
    </Section>
  );
};

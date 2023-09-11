import { MainButton } from '@/components/buttons/MainButton';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { CurrentProjectSlider } from '@/components/sliders/CurrentProjectSlider';
import { Title } from '@/components/typography/Title';
import { projectName, organization, moneyAmount, imgSrc, imgAlt } from './data';
import s from './CompletedIntroSection.module.css';
import { CompletedIntroCard } from '@/components/cards/CompletedIntroCard';

export const CompletedIntroSection = () => {
  return (
    <>
      <Section>
        <Container>
          <div className={s.projectHeaderBlock}>
            <div className={s.projectPictureBlock}>
              {/* <CurrentProjectSlider  /> */}
              <CompletedIntroCard imageSrc={imgSrc} imageAlt={imgAlt}/>
            </div>
            <div className={s.projectInfoBlock}>
              <Title className={s.projectName}>{projectName}</Title>
              <p className={s.organization}>{organization}</p>
              <p className={s.ourGoal}>Our Goal</p>
              <p className={s.moneyAmount}>{moneyAmount}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

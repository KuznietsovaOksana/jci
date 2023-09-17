import { useTranslation } from 'next-i18next';

import { MainButton } from '@/components/buttons/MainButton';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { CurrentProjectSlider } from '@/components/sliders/CurrentProjectSlider';
import { Title } from '@/components/typography/Title';
import { Tabs } from '@/components/common/Tabs';
import { projectName, organization, moneyAmount, images } from './data';

import s from './IntroSection.module.css';

export const IntroSection = () => {
  const { t: projectPageT } = useTranslation('projectPage');
  const { t: commonT } = useTranslation('common');

  const tabsDesk: string[] = projectPageT('tabs.tabsDesk', {
    returnObjects: true,
    defaultValue: [],
  });
  const tabsTab: string[] = projectPageT('tabs.tabsTab', {
    returnObjects: true,
    defaultValue: [],
  });

  return (
    <Section>
      <Container>
        <div className={s.projectHeaderBlock}>
          <div className={s.projectPictureBlock}>
            <CurrentProjectSlider images={images} />
          </div>
          <div className={s.projectInfoBlock}>
            <Title className={s.projectName}>{projectName}</Title>
            <p className={s.organization}>{organization}</p>
            <p className={s.ourGoal}>{projectPageT('hero.goal')}</p>
            <p className={s.moneyAmount}>{moneyAmount}</p>
            <div className={s.btn}>
              <MainButton
                text={commonT('buttons.donate')}
                style='secondaryNavy'
                className={s.noMaxWidth}
              />
            </div>
          </div>
        </div>
        <Tabs type='project' tabs={{ tabsDesk, tabsTab }} />
      </Container>
    </Section>
  );
};

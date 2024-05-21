import { useTranslation } from 'next-i18next';

import { MainButton } from '@/components/buttons/MainButton';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { CurrentProjectSlider } from '@/components/sliders/CurrentProjectSlider';
import { Title } from '@/components/typography/Title';
import { Tabs } from '@/components/common/Tabs';
// import { projectName, organization, moneyAmount, images } from './data';

import s from './IntroSection.module.css';
import { IIntroSection } from '@/sections/ProjectsPage/lProjectsProps';
import { useLocalization } from '@/contexts/LocalizationContext';

export const IntroSection = ({ currentProject }: IIntroSection) => {
  const { t: projectPageT } = useTranslation('projectPage');
  const { t: commonT } = useTranslation('common');
  const { locale } = useLocalization();
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
            <CurrentProjectSlider images={currentProject.multimedia} />
          </div>
          <div className={s.projectInfoBlock}>
            <Title className={s.projectName}>
              {locale === 'uk'
                ? currentProject.name_uk
                : currentProject.name_en}
            </Title>
            <p className={s.organization}>
              {locale === 'uk'
                ? currentProject.founder_uk
                : currentProject.founder_en}
            </p>
            <p className={s.ourGoal}>{projectPageT('hero.goal')}</p>
            <p className={s.moneyAmount}>
              {locale === 'uk'
                ? currentProject.amount_uk
                : currentProject.amount_en}
            </p>
            <div className={s.btn}>
              <MainButton
                text={commonT('buttons.donate')}
                style='secondaryNavy'
                className={s.noMaxWidth}
              />
            </div>
          </div>
        </div>
        <Tabs
          type='project'
          tabs={{ tabsDesk, tabsTab }}
          data={currentProject}
        />
      </Container>
    </Section>
  );
};

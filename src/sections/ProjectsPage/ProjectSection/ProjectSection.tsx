import { useTranslation } from 'next-i18next';

import Flag from 'public/icons/flag.svg';

import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { IconButton } from '@/components/buttons/IconButton';
import { ProjectPageCard } from '@/components/cards/ProjectPageCard';

import { DonateSection } from '@/sections/MainPage/DonateSection';

import s from './ProjectSection.module.css';
import { IProjectsProps } from '../lProjectsProps';
import { useLocalization } from '@/contexts/LocalizationContext';
import { useState } from 'react';

// const projectsTop = [
//   {
//     image_main_dt: '/images/projects/project_1.png',
//     image_hover_dt: '/images/projects/project_01dt_hover.jpg',
//     image_add: '/images/projects/project_01dt_add.jpg',
//     title: 'Housing for IDPs',
//     subtitle: 'JCI “Olimp”',
//     text: 'Our goal today is to provide housing for people, who lost it due to the invasion, by gathering qualified professionals to implement housing projects: from 0 to ready-to-live housing. Target audience - IDP',
//   },
//   {
//     image_main_dt: '/images/projects/project_2.png',
//     image_add: '/images/projects/project_02dt_add.jpg',
//     image_hover_dt: '/images/projects/project_02dt_hover.jpg',
//     title: 'Tooth Fairy',
//     subtitle: 'CF “Tooth Fairy”   ',
//     text: 'Project  is dedicated to promoting good dental health among children. Our volunteers work with local schools and community organisations to provide dental care education and resources to children',
//   },
// ];

// const projectsLow = [
//   {
//     image_main_dt: '/images/projects/project_3.png',
//     image_add: '/images/projects/project_03dt_add.jpg',
//     image_hover_dt: '/images/projects/project_03dt_hover.jpg',
//     title: 'Shelters Network',
//     subtitle: 'JCI Ukraine',
//     text: 'Project  is a compassionate initiative dedicated to tackling homelessness and supporting vulnerable individuals. By establishing a network of shelters across Ukraine, the project offers safe accommodations, essential services, and social support to those in need.',
//   },
//   {
//     image_main_dt: '/images/projects/project.png',
//     image_hover_dt: '/images/projects/project_01dt_hover.jpg',
//     image_add: '/images/projects/project_01dt_add.jpg',
//     title: 'Association of Humanitarian Centres',
//     subtitle: 'Jci Ukraine',
//     text: 'Our volunteers work with local centers to provide support, including supplies and equipment, fundraising assistance, and educational resources.',
//   },
// ];

export const ProjectSectionPP = ({ projectsData }: IProjectsProps) => {
  const [showMore, setShowMore] = useState(false);
  const { t: projectsPageT } = useTranslation('projectsPage');
  const { t: commonT } = useTranslation('common');
  const { locale } = useLocalization();
  const firstData = projectsData.slice(0, 2);
  const secondData = projectsData.slice(2, 4);
  const moreData = projectsData.slice(4);

  return (
    <>
      <Section
        className={`${s.project_section} ${s.top_section} ${s.first_section}`}
      >
        <Container>
          <Title tag='h1' className={s.project_title}>
            {projectsPageT('hero.title')}
            <span className={s.project_title_span}>
              {projectsPageT('hero.span')}
            </span>
            <Flag className={s.projects_flag} />
          </Title>

          <div className={s.projects_wrapper}>
            {firstData.length > 0 &&
              firstData.map(project => (
                <ProjectPageCard
                  key={project.id}
                  id={project.id}
                  image_dt={project.multimedia[0].photo}
                  image_add={project.multimedia[0].photo}
                  hover_dt={project.multimedia[0].photo}
                  alt={
                    locale === 'uk'
                      ? project.multimedia[0].alt_text_uk
                      : project.multimedia[0].alt_text_en
                  }
                  title={locale === 'uk' ? project.name_uk : project.name_en}
                  subtitle={
                    locale === 'uk' ? project.founder_uk : project.founder_en
                  }
                  text={
                    locale === 'uk'
                      ? project.short_description_uk
                      : project.short_description_en
                  }
                />
              ))}
          </div>
        </Container>
      </Section>

      <DonateSection heading={projectsPageT('donate.text')} />

      <Section className={`${s.project_section} ${s.low_section}`}>
        <Container>
          <div className={`${s.projects_wrapper} ${s.projects_low}`}>
            {secondData.length > 0 &&
              secondData.map(project => (
                <ProjectPageCard
                  key={project.id}
                  id={project.id}
                  image_dt={project.multimedia[0].photo}
                  image_add={project.multimedia[0].photo}
                  hover_dt={project.multimedia[0].photo}
                  alt={
                    locale === 'uk'
                      ? project.multimedia[0].alt_text_uk
                      : project.multimedia[0].alt_text_en
                  }
                  title={locale === 'uk' ? project.name_uk : project.name_en}
                  subtitle={
                    locale === 'uk' ? project.founder_uk : project.founder_en
                  }
                  text={
                    locale === 'uk'
                      ? project.short_description_uk
                      : project.short_description_en
                  }
                />
              ))}
            {showMore &&
              moreData.length > 0 &&
              moreData.map(project => (
                <ProjectPageCard
                  key={project.id}
                  id={project.id}
                  image_dt={project.multimedia[0].photo}
                  image_add={project.multimedia[0].photo}
                  hover_dt={project.multimedia[0].photo}
                  alt={
                    locale === 'uk'
                      ? project.multimedia[0].alt_text_uk
                      : project.multimedia[0].alt_text_en
                  }
                  title={locale === 'uk' ? project.name_uk : project.name_en}
                  subtitle={
                    locale === 'uk' ? project.founder_uk : project.founder_en
                  }
                  text={
                    locale === 'uk'
                      ? project.short_description_uk
                      : project.short_description_en
                  }
                />
              ))}
          </div>
          {!showMore && moreData.length > 0 && (
            <div className={s.button_wrapper}>
              <IconButton
                onClick={() => setShowMore(prevState => !prevState)}
                Tag={'button'}
                isDown
                text={commonT('buttons.moreProjects')}
              />
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

import Flag from 'public/icons/flag.svg';

import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { IconButton } from '@/components/buttons/IconButton';
import { ProjectPageCard } from '@/components/cards/ProjectPageCard';

import { DonateSection } from '@/sections/MainPage/DonateSection';

import s from './ProjectSection.module.css';

const projectsTop = [
  {
    image_main_dt: '/images/projects/project_1.png',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    image_add: '/images/projects/project_01dt_add.jpg',
    title: 'Housing for IDPs',
    subtitle: 'JCI “Olimp”',
    text: 'Our goal today is to provide housing for people, who lost it due to the invasion, by gathering qualified professionals to implement housing projects: from 0 to ready-to-live housing. Target audience - IDP',
  },
  {
    image_main_dt: '/images/projects/project_2.png',
    image_add: '/images/projects/project_02dt_add.jpg',
    image_hover_dt: '/images/projects/project_02dt_hover.jpg',
    title: 'Tooth Fairy',
    subtitle: 'CF “Tooth Fairy”   ',
    text: 'Project  is dedicated to promoting good dental health among children. Our volunteers work with local schools and community organisations to provide dental care education and resources to children',
  },
];

const projectsLow = [
  {
    image_main_dt: '/images/projects/project_3.png',
    image_add: '/images/projects/project_03dt_add.jpg',
    image_hover_dt: '/images/projects/project_03dt_hover.jpg',
    title: 'Shelters Network',
    subtitle: 'JCI Ukraine',
    text: 'Project  is a compassionate initiative dedicated to tackling homelessness and supporting vulnerable individuals. By establishing a network of shelters across Ukraine, the project offers safe accommodations, essential services, and social support to those in need.',
  },
  {
    image_main_dt: '/images/projects/project.png',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    image_add: '/images/projects/project_01dt_add.jpg',
    title: 'Association of Humanitarian Centres',
    subtitle: 'Jci Ukraine',
    text: 'Our volunteers work with local centers to provide support, including supplies and equipment, fundraising assistance, and educational resources.',
  },
];

export const ProjectSectionPP: NextPage = () => {
  const { t: projectsPageT } = useTranslation('projectsPage');
  const { t: commonT } = useTranslation('common');

  return (
    <>
      <Section
        className={`${s.project_section} ${s.top_section} first_section`}
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
            {projectsTop.map((project, index) => (
              <ProjectPageCard
                key={index}
                image_dt={project.image_main_dt}
                image_add={project.image_add}
                hover_dt={project.image_hover_dt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DonateSection heading={projectsPageT('donate.text')} />

      <Section className={`${s.project_section} ${s.low_section}`}>
        <Container>
          <div className={`${s.projects_wrapper} ${s.projects_low}`}>
            {projectsLow.map((project, index) => (
              <ProjectPageCard
                key={index}
                image_dt={project.image_main_dt}
                image_add={project.image_add}
                hover_dt={project.image_hover_dt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
              />
            ))}
          </div>
          <div className={s.button_wrapper}>
            <IconButton isDown text={commonT('buttons.moreProjects')} />
          </div>
        </Container>
      </Section>
    </>
  );
};

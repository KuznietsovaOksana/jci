import { useTranslation } from 'next-i18next';

import { Title } from '@/components/typography/Title';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { IconButton } from '@/components/buttons/IconButton';
import { IProjectsProps } from '@/sections/ProjectsPage/lProjectsProps';
import { useLocalization } from '@/contexts/LocalizationContext';
import { router } from '@/utils/routes';

import s from './ProjectSection.module.css';

// const projects = [
//   {
//     image_main_dt: '/images/projects/project_01dt.jpg',
//     image_hover_dt: '/images/projects/project_01dt_hover.jpg',
//     title: 'Housing for IDPs',
//     subtitle: 'JCI “Olimp”',
//     text: 'Reconstruction of a dormitory in Irpin for 20 families provides safe and sustainable housing solutions to support the  of IDP',
//   },
//   {
//     image_main_dt: '/images/projects/project_02dt.jpg',
//     image_hover_dt: '/images/projects/project_02dt_hover.jpg',
//     title: 'Tooth Fairy',
//     subtitle: 'CF “Tooth Fairy”   ',
//     text: 'Project works to educate children about the importance of dental health while also collecting and  essential dental supplies',
//   },
//   {
//     image_main_dt: '/images/projects/project_3.png',
//     image_hover_dt: '/images/projects/project_03dt_hover.jpg',
//     title: 'Shelters Network',
//     subtitle: 'JCI Ukraine',
//     text: 'Project is dedicated to supporting vulnerable populations by providing safe and secure shelters',
//   },
//   {
//     image_main_dt: '/images/projects/project_01dt.jpg',
//     image_hover_dt: '/images/projects/project_01dt_hover.jpg',
//     title: 'Association of Humanitarian Centres',
//     subtitle: 'Jci Ukraine',
//     text: 'Our volunteers work with local centres to provide support',
//   },
// ];

export const ProjectSection = ({ projectsData }: IProjectsProps) => {
  const { t: mainPageT } = useTranslation('mainPage');
  const { t: commonT } = useTranslation('common');
  const { locale } = useLocalization();
  const shortProjectsData = projectsData.slice(0, 4);

  return (
    <Section>
      <Container>
        <Title className={s.project_title}>
          <span className={s.project_title_span}>
            {mainPageT('projects.span')}
          </span>
          {mainPageT('projects.title')}
        </Title>
        <ul className={s.projects_wrapper}>
          {shortProjectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image_dt={project.multimedia[0].photo}
              hover_dt={project.multimedia[0].photo}
              title={locale === 'uk' ? project.name_uk : project.name_en}
              subtitle={
                locale === 'uk' ? project.founder_uk : project.founder_en
              }
              text={
                locale === 'uk'
                  ? project.project_detail_uk
                  : project.project_detail_en
              }
            />
          ))}
        </ul>
        <div className={s.button_wrapper}>
          <IconButton
            href={router.PROJECTS}
            text={commonT('buttons.allProjects')}
          />
        </div>
      </Container>
    </Section>
  );
};

import { NextPage } from 'next';

import { Title } from '@/components/Title';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { IconButton } from '@/components/ui-kit/buttons/IconButton';

import s from './ProjectSection.module.css';

const projects = [
  {
    image_main_dt: '/images/projects/project_01dt.jpg',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    title: 'Housing for IDPs',
    subtitle: 'JCI “Olimp”',
    text: 'Reconstruction of a dormitory in Irpin for 20 families provides safe and sustainable housing solutions to support the  of IDP',
  },
  {
    image_main_dt: '/images/projects/project_02dt.jpg',
    image_hover_dt: '/images/projects/project_02dt_hover.jpg',
    title: 'Tooth Fairy',
    subtitle: 'CF “Tooth Fairy”   ',
    text: 'Project works to educate children about the importance of dental health while also collecting and  essential dental supplies',
  },
  {
    image_main_dt: '/images/projects/project_03dt.jpg',
    image_hover_dt: '/images/projects/project_03dt_hover.jpg',
    title: 'Shelters Network',
    subtitle: 'JCI Ukraine',
    text: 'Project is dedicated to supporting vulnerable populations by providing safe and secure shelters',
  },
  {
    image_main_dt: '/images/projects/project_01dt.jpg',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    title: 'Association of Humanitarian Centres',
    subtitle: 'Jci Ukraine',
    text: 'Our volunteers work with local centres to provide support to those that are in need of any kind of help',
  },
];

// const ArrowWithClass = () => <Arrow className={css.button_icon} />;

export const ProjectSection: NextPage = () => {
  return (
    <Section>
      <Container>
        <Title className={s.project_title}>
          <span className={s.project_title_span}>Humanitarian projects</span> we
          work on
        </Title>
        <ul className={s.projects_wrapper}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image_dt={project.image_main_dt}
              hover_dt={project.image_hover_dt}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </ul>
        <div className={s.button_wrapper}>
          <IconButton text='Go to all projects' />
        </div>
      </Container>
    </Section>
  );
};

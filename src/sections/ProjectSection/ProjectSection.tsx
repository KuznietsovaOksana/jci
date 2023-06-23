import { NextPage } from 'next';

import Arrow from 'public/icons/arrow-right.svg';

import { ProjectCard } from '../../components/ProjectCard';

import css from './ProjectSection.module.css';

const projects = [
  {
    image_main_dt: '/images/projects/project_01dt.jpg',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    image_main_m: '/images/projects/project_01m.jpg',
    image_hover_m: '/images/projects/project_01m_hover.jpg',
    title: 'Housing for IDPs',
    subtitle: 'JCI “Olimp”',
    text: 'Reconstruction of a dormitory in Irpin for 20 families provides safe and sustainable housing solutions to support the  of IDP',
  },
  {
    image_main_dt: '/images/projects/project_02dt.jpg',
    image_hover_dt: '/images/projects/project_02dt_hover.jpg',
    image_main_m: '/images/projects/project_02m.jpg',
    image_hover_m: '/images/projects/project_02m_hover.jpg',
    title: 'Tooth Fairy',
    subtitle: 'CF “Tooth Fairy”   ',
    text: 'Project works to educate children about the importance of dental health while also collecting and  essential dental supplies',
  },
  {
    image_main_dt: '/images/projects/project_03dt.jpg',
    image_hover_dt: '/images/projects/project_03dt_hover.jpg',
    image_main_m: '/images/projects/project_03m.jpg',
    image_hover_m: '/images/projects/project_03m_hover.jpg',
    title: 'Shelters Network',
    subtitle: 'JCI Ukraine',
    text: 'Project is dedicated to supporting vulnerable populations by providing safe and secure shelters',
  },
  {
    image_main_dt: '/images/projects/project_01dt.jpg',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    image_main_m: '/images/projects/project_01m.jpg',
    image_hover_m: '/images/projects/project_01m_hover.jpg',
    title: 'Association of Humanitarian Centres',
    subtitle: 'Jci Ukraine',
    text: 'Our volunteers work with local centres to provide support to those that are in need of any kind of help',
  },
];

// const ArrowWithClass = () => <Arrow className={css.button_icon} />;

export const ProjectSection: NextPage = () => {
  return (
    <section className={css.project_section}>
      <h3 className={css.project_title}>
        <span className={css.project_title_span}>Humanitarian projects</span> we
        work on
      </h3>
      <div className={css.projects_wrapper}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image_dt={project.image_main_dt}
            image_m={project.image_main_m}
            hover_dt={project.image_hover_dt}
            hover_m={project.image_hover_m}
            title={project.title}
            subtitle={project.subtitle}
            text={project.text}
          />
        ))}
      </div>
      <div className={css.button_wrapper}>
        <a href='#' className={css.projects_link}>
          Go to all projects
        </a>
        <Arrow className={css.button_icon} />
      </div>
    </section>
  );
};

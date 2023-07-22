import { NextPage } from 'next';

import Arrow from 'public/icons/chevron_Down.svg';
import Flag from 'public/icons/icon.svg';

import { ProjectCardPP } from '@/components/ProjectPage/Project_card/Project_card_pp';
import { DonateSection } from '@/sections/MainPage/DonateSection';
import { donateText } from '@/components/Section/DonateSectionComponent';

import s from './ProjectSectionPP.module.css';

const projectsTop = [
  {
    image_main_dt: '/images/projects/project_1.png',
    image_main_t: '/images/projects/project_01dt.jpg',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    image_main_m: '/images/projects/project_01m.jpg',
    image_hover_m: '/images/projects/project_01m_hover.jpg',
    title: 'Housing for IDPs',
    subtitle: 'JCI “Olimp”',
    text: 'Reconstruction of a dormitory in Irpin for 20 families provides safe and sustainable housing solutions to support the  of IDP',
  },
  {
    image_main_dt: '/images/projects/project_2.png',
    image_main_t: '/images/projects/project_02dt.jpg',
    image_hover_dt: '/images/projects/project_02dt_hover.jpg',
    image_main_m: '/images/projects/project_02m.jpg',
    image_hover_m: '/images/projects/project_02m_hover.jpg',
    title: 'Tooth Fairy',
    subtitle: 'CF “Tooth Fairy”   ',
    text: 'Project works to educate children about the importance of dental health while also collecting and  essential dental supplies',
  },
];

const projectsLow = [
  {
    image_main_dt: '/images/projects/project_3.png',
    image_main_t: '/images/projects/project_03dt.jpg',
    image_hover_dt: '/images/projects/project_03dt_hover.jpg',
    image_main_m: '/images/projects/project_03m.jpg',
    image_hover_m: '/images/projects/project_03m_hover.jpg',
    title: 'Shelters Network',
    subtitle: 'JCI Ukraine',
    text: 'Project is dedicated to supporting vulnerable populations by providing safe and secure shelters',
  },
  {
    image_main_dt: '/images/projects/project.png',
    image_main_t: '/images/projects/project_01dt.jpg',
    image_hover_dt: '/images/projects/project_01dt_hover.jpg',
    image_main_m: '/images/projects/project_01m.jpg',
    image_hover_m: '/images/projects/project_01m_hover.jpg',
    title: 'Association of Humanitarian Centres',
    subtitle: 'Jci Ukraine',
    text: 'Our volunteers work with local centres to provide support to those that are in need of any kind of help',
  },
];

export const ProjectSectionPP: NextPage = () => {
  return (
    <>
      <section className={`${s.project_section} ${s.top_section}`}>
        <h3 className={s.project_title}>
          Our
          <span className={s.project_title_span}> projects</span>
          <Flag className={s.projects_flag} />
        </h3>

        <div className={s.projects_wrapper}>
          {projectsTop.map((project, index) => (
            <ProjectCardPP
              key={index}
              image_dt={project.image_main_dt}
              image_t={project.image_main_t}
              image_m={project.image_main_m}
              hover_dt={project.image_hover_dt}
              hover_m={project.image_hover_m}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </div>
      </section>
      <DonateSection heading={donateText.appeal} />
      <section className={`${s.project_section} ${s.low_section}`}>
        <div className={s.projects_wrapper}>
          {projectsLow.map((project, index) => (
            <ProjectCardPP
              key={index}
              image_dt={project.image_main_dt}
              image_t={project.image_main_t}
              image_m={project.image_main_m}
              hover_dt={project.image_hover_dt}
              hover_m={project.image_hover_m}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </div>
        <div className={s.button_wrapper}>
          <a href='#' className={s.projects_link}>
            More projects
          </a>
          <Arrow className={s.button_icon} />
        </div>
      </section>
    </>
  );
};

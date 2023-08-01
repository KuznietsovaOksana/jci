import { NextPage } from 'next';

import Arrow from 'public/icons/chevron_Down.svg';
import Flag from 'public/icons/flag.svg';

import { ProjectCardPP } from '@/components/ProjectPage/Project_card/Project_card_pp';
import { DonateSection } from '@/sections/MainPage/DonateSection';
import { donateText } from '@/components/Section/DonateSectionComponent';

import s from './ProjectSectionPP.module.css';

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
              image_add={project.image_add}
              hover_dt={project.image_hover_dt}
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
              image_add={project.image_add}
              hover_dt={project.image_hover_dt}
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

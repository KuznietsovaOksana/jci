import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import s from './ProjectCard.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

interface ProjectCardProps {
  image_dt: string;
  image_m: string;
  title: string;
  subtitle: string;
  text: string;
  hover_dt: string;
  hover_m: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image_dt,
  image_m,
  title,
  subtitle,
  text,
  hover_dt,
  hover_m,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className={s.project_card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <picture className={s.project_img}>
        <source
          srcSet={isHovered ? hover_dt : image_dt}
          media='(min-width: 768px)'
        />
        <img src={isHovered ? hover_m : image_m} alt={title} />
      </picture>
      <div className={s.project_wrapper}>
        <div className={s.project_text_wrapper}>
          <h2 className={s.project_title}>{title}</h2>
          <MediaQuery minWidth={768}>
            <h3 className={s.project_subTitle}>{subtitle}</h3>
          </MediaQuery>
          <p className={s.project_text}>{text}</p>
        </div>
        <MediaQuery minWidth={1440}>
          {isHovered && (
            <a href='#' className={s.project_button}>
              Donate
            </a>
          )}
        </MediaQuery>
        <MediaQuery maxWidth={1439}>
          <a href='#' className={s.project_button}>
            Donate
          </a>
        </MediaQuery>
      </div>
    </li>
  );
};

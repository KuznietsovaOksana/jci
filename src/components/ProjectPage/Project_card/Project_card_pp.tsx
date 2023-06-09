import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import s from './ProjectCardPP.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

interface ProjectCardProps {
  image_dt: string;
  image_t: string;
  image_m: string;
  title: string;
  subtitle: string;
  text: string;
  hover_dt: string;
  hover_m: string;
}

export const ProjectCardPP: React.FC<ProjectCardProps> = ({
  image_dt,
  image_t,
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
    <div
      className={s.project_card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <picture className={s.project_img}>
        <source
          srcSet={isHovered ? hover_dt : image_dt}
          media='(min-width: 1440px)'
        />
        <source srcSet={image_t} media='(min-width: 768px)' />
        <img src={isHovered ? hover_m : image_m} alt={title} />
      </picture>
      <div className={s.project_wrapper}>
        <div className={s.project_text_wrapper}>
          <h2 className={s.project_title}>{title}</h2>

          <h3 className={s.project_subTitle}>{subtitle}</h3>
          <p className={s.project_text}>{text}</p>
          <p className={s.project_goal}>Our goal</p>
          <MediaQuery maxWidth={767}>
            <p className={s.project_collection}>Collection amount</p>
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <p className={s.project_collection}>Amount</p>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <p className={s.project_collection}>Collection amount</p>
          </MediaQuery>
        </div>

        <a href='#' className={s.project_button}>
          Donate
        </a>
      </div>
    </div>
  );
};

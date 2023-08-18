import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import s from './ProjectCard.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

interface ProjectCardProps {
  image_dt: string;
  title: string;
  subtitle: string;
  text: string;
  hover_dt: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image_dt,
  title,
  subtitle,
  text,
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
      <MediaQuery maxWidth={767}>
        <Image
          src={image_dt}
          alt='Project photo'
          priority
          className={s.project_img}
          width={252}
          height={234}
          style={{ objectFit: 'cover' }}
        />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1439}>
        <Image
          src={image_dt}
          alt='Project photo'
          priority
          className={s.project_img}
          width={552}
          height={435}
          style={{ objectFit: 'cover' }}
        />
      </MediaQuery>
      <MediaQuery minWidth={1440}>
        <Image
          src={image_dt}
          alt='Project photo'
          priority
          className={s.project_img}
          width={264}
          height={312}
          style={{ objectFit: 'cover' }}
        />
      </MediaQuery>

      <div className={s.project_wrapper}>
        <div className={s.project_text_wrapper}>
          <h2 className={s.project_title}>{title}</h2>

          <h3 className={s.project_subTitle}>{subtitle}</h3>
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

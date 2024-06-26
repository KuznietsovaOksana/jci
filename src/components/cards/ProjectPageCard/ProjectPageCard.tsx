import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { MainButton } from '@/components/buttons/MainButton';

import s from './ProjectPageCard.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

interface ProjectCardProps {
  image_dt: string;
  image_add: string;
  title: string;
  subtitle: string;
  text: string;
  hover_dt: string;
  alt: string;
  id: string | number;
}

export const ProjectPageCard: React.FC<ProjectCardProps> = ({
  image_dt,
  title,
  subtitle,
  text,
  alt,
  id,
}) => {
  const { t } = useTranslation('common');

  return (
    <div className={s.project_card}>
      <a href={`/projects/${id}`} className={s.project_link}>
        <div className={s.img_wrapper}>
          <MediaQuery maxWidth={767}>
            <Image
              src={image_dt}
              alt={alt}
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
              alt={alt}
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
              alt={alt}
              priority
              className={s.project_img}
              width={552}
              height={488}
              style={{ objectFit: 'cover' }}
            />
          </MediaQuery>
        </div>
      </a>
      <div className={s.project_wrapper}>
        <div className={s.project_text_wrapper}>
          <div className={s.project_title_wrapper}>
            <h2 className={s.project_title}>{title}</h2>
            <h3 className={s.project_subTitle}>{subtitle}</h3>
          </div>
          <p className={s.project_text}>{text}</p>
          <div className={s.project_goal_wrapper}>
            <p className={s.project_goal}>{t('card.goal')}</p>
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
        </div>

        <MainButton
          text={t('buttons.donate')}
          style='secondaryNavy'
          className={s.project_button}
        />
      </div>
    </div>
  );
};

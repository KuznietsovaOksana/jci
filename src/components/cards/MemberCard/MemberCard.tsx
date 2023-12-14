import React from 'react';
import Image from 'next/image';
import FbLogo from 'public/icons/fb_member.svg';

import s from './MemberCard.module.css';
import { useScreen } from '@/hooks/use_screen';

interface MemberCardProps {
  photo: string;
  alt: string;
  nameSurname: string;
  position: string;
  experience1: string;
  experience2: string;
  experience3: string | null;
  experience4: string | null;
  experience5: string | null;
  facebook_link: string | null;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  photo,
  nameSurname,
  alt,
  position,
  experience1,
  experience2,
  experience3,
  experience4,
  experience5,
  facebook_link,
}) => {
  const { isMobile, isTablet } = useScreen();
  return (
    <>
      <div className={s.memberWrapper}>
        {photo && (
          <Image
            width={isMobile ? 252 : isTablet ? 264 : 360}
            height={isMobile ? 217 : isTablet ? 218 : 360}
            src={photo}
            alt={alt}
            className={s.memberPhoto}
          />
        )}
        <div className={s.textWrapper}>
          <a
            className={s.logo_icon}
            href={facebook_link ?? ''}
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FbLogo className={s.fb_logo} />
          </a>
          <div className={s.positionWrapper}>
            <h5 className={s.memberName}>{nameSurname}</h5>
            <h6 className={s.memberPosition}>{position} </h6>
          </div>
          <div className={s.experienceWrapper}>
            {experience1 && <p>{experience1}</p>}
            {experience2 && <p>{experience2}</p>}
            {experience3 && <p>{experience3}</p>}
            {experience4 && <p>{experience4}</p>}
            {experience5 && <p>{experience5}</p>}
          </div>
        </div>
      </div>

      {/* <div className={s.leaderWrapper}>
        <Image
          width={252}
          height={217}
          src={photo}
          alt={alt}
          className={s.memberPhoto}
        />
        <div className={s.leaderTextWrapper}>
          <a
            className={s.leader_logo_icon}
            href=''
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <FbLogo className={s.leader_fb_logo} />
          </a>
          <div className={s.leaderPositionWrapper}>
            <h5 className={s.leaderName}>{nameSurname}</h5>
            <h6 className={s.leaderPosition}>{position} </h6>
          </div>
          <div className={s.leaderExperienceWrapper}>
            <p>{experience1}</p>
            <p className={s.leaderText}>текст 1</p>
            <p className={s.leaderText}>текст 2</p>
            <p className={s.leaderText}>текст 3</p>
            <p className={s.leaderText}>текст 4</p>
            <p className={s.leaderText}>текст 5</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

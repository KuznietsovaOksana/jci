import React from 'react';
import s from './MemberCard.module.css';
import FbLogo from 'public/icons/fb_member.svg';

interface MemberCardProps {
  photo: string;
  nameSurname: string;
  position: string;
  experience1: string;
  experience2: string;
  experience3: string;
  experience4: string;
  experience5: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  photo,
  nameSurname,
  position,
  experience1,
  experience2,
  experience3,
  experience4,
  experience5,
}) => {
  return (
    <>
      <div className={s.memberWrapper}>
        <img src={photo} alt={nameSurname} className={s.memberPhoto} />
        <div className={s.textWrapper}>
          <a
            className={s.logo_icon}
            href=''
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
            <p>{experience1}</p>
            <p>{experience2}</p>
            <p>{experience3}</p>
            <p>{experience4}</p>
            <p>{experience5}</p>
            <p className={s.memberText}>текст 1</p>
            <p className={s.memberText}>текст 2</p>
            <p className={s.memberText}>текст 3</p>
            <p className={s.memberText}>текст 4</p>
            <p className={s.memberText}>текст 5</p>
          </div>
        </div>
      </div>

      <div className={s.leaderWrapper}>
        <img src={photo} alt={nameSurname} className={s.leaderPhoto} />
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
      </div>
    </>
  );
};

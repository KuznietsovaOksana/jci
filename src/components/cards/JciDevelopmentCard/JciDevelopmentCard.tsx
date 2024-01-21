import React from 'react';
import Image from 'next/image';
import InfoIcon from 'public/icons/info.svg';

import s from './JciDevelopmentCard.module.css';
import { useScreen } from '@/hooks/use_screen';

// interface MemberCardProps {
//   photo: string;
//   alt: string;
//   nameSurname: string;
//   position: string;
//   experience1: string;
//   experience2: string;
//   experience3: string | null;
//   experience4: string | null;
//   experience5: string | null;
//   facebook_link: string | null;
// }

// export const JciDevelopmentCard: React.FC<MemberCardProps> = ({
//   photo,
//   nameSurname,
//   alt,
//   position,
//   experience1,
//   experience2,
//   experience3,
//   experience4,
//   experience5,
//   facebook_link,
// }) => {
//   const { isMobile, isTablet } = useScreen();
//   return (
//     <>
//       <div className={s.memberWrapper}>
//         {photo && (
//           <Image
//             width={isMobile ? 252 : isTablet ? 264 : 360}
//             height={isMobile ? 217 : isTablet ? 218 : 360}
//             src={photo}
//             alt={alt}
//             className={s.memberPhoto}
//           />
//         )}
//         <div className={s.textWrapper}>
//           <a
//             className={s.logo_icon}
//             href={facebook_link ?? ''}
//             target='_blank'
//             rel='noopener noreferrer nofollow'
//           >
//             <FbLogo className={s.fb_logo} />
//           </a>
//           <div className={s.positionWrapper}>
//             <h5 className={s.memberName}>{nameSurname}</h5>
//             <h6 className={s.memberPosition}>{position} </h6>
//           </div>
//           <div className={s.experienceWrapper}>
//             {experience1 && <p>{experience1}</p>}
//             {experience2 && <p>{experience2}</p>}
//             {experience3 && <p>{experience3}</p>}
//             {experience4 && <p>{experience4}</p>}
//             {experience5 && <p>{experience5}</p>}
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };


export const JciDevelopmentCard = () => {

    return (
        <>
        <p>Hey there!</p>
        <div className={s.card}>
            <div className={s.overlay}>
            </div>
            <div className={s.card_info}>
                <p className={s.card_title}>CYE</p>
                <p className={s.card_text}>The JCI Ten Outstanding Young Persons of the World (JCI TOYP) program honors ten outstanding young people under the age of 40 each year. These individuals exemplify the spirit of the JCI Mission. The final ten TOYP nominees will be honored during the JCI World Congress.</p>
            </div>
            <div className={s.icon_overlay}>
                <InfoIcon className={s.info_icon} />
            </div>
            </div>
        </>
    )
}
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import imgD from 'public/images/president/president_01d.jpg';
// import imgT from 'public/images/president/president_01t.jpg';
// import imgM from 'public/images/president/president_01m.jpg';

import s from './OurPresident.module.css';

export const OurPresident = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1439 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isNotMobile = useMediaQuery({ minWidth: 1440 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }
  return (
    <Section>
      {isMobile && (
        <Container>
          <h2 className={s.title}>Julia Kuznetsova</h2>
          <p className={s.position}>JCI Ukraine President</p>
          <div className={s.photoBlock}>
            <Image
              src={imgD}
              alt='President photo'
              priority
              className={s.photo}
            />
          </div>
          <p className={s.description}>
            As National President, Kuznetsova is responsible for overseeing
            JCI&apos;s operations and initiatives in Ukraine, and leading the
            organisation&apos;s efforts to engage and empower young people in
            the country. Her role also involves representing JCI Ukraine at the
            international level and collaborating with other JCI chapters around
            the world.
          </p>
        </Container>
      )}

      {isNotMobile && (
        <Container>
          <div className={s.presidentSection}>
            <div className={s.photoBlock}>
              <Image
                src={imgD}
                alt='President photo'
                priority
                className={s.photo}
              />
            </div>
            <div className={s.textBlock}>
              <h2 className={s.title}>Julia Kuznetsova</h2>
              <p className={s.position}>JCI Ukraine President</p>
              <p className={s.description}>
                As National President, Kuznetsova is responsible for overseeing
                JCI&apos;s operations and initiatives in Ukraine, and leading
                the organisation&apos;s efforts to engage and empower young
                people in the country. Her role also involves representing JCI
                Ukraine at the international level and collaborating with other
                JCI chapters around the world.
              </p>
            </div>
          </div>
        </Container>
      )}
    </Section>
  );
};





// return (
//     <Section>
//       {isMobile && (
//         <Container>
//           <h2 className={s.title}>Julia Kuznetsova</h2>
//           <p className={s.position}>JCI Ukraine President</p>
//           <div className={s.photoBlock}>
//             <Image
//               src={imgD}
//               alt='President photo'
//               priority
//               className={s.photo}
//             />
//           </div>
//           <p className={s.description}>
//             As National President, Kuznetsova is responsible for overseeing
//             JCI&apos;s operations and initiatives in Ukraine, and leading the
//             organisation&apos;s efforts to engage and empower young people in
//             the country. Her role also involves representing JCI Ukraine at the
//             international level and collaborating with other JCI chapters around
//             the world.
//           </p>
//         </Container>
//       )}
//       {isTablet && (
//         <Container>
//           <h2 className={s.title}>Julia Kuznetsova</h2>
//           <p className={s.position}>JCI Ukraine President</p>
//           <div className={s.photoBlock}>
//             <Image
//               src={imgD}
//               alt='President photo'
//               priority
//               className={s.photo}
//             />
//           </div>
//           <p className={s.description}>
//             As National President, Kuznetsova is responsible for overseeing
//             JCI&apos;s operations and initiatives in Ukraine, and leading the
//             organisation&apos;s efforts to engage and empower young people in
//             the country. Her role also involves representing JCI Ukraine at the
//             international level and collaborating with other JCI chapters around
//             the world.
//           </p>
//         </Container>
//       )}
//       {isDesktop && (
//         <Container>
//           <div className={s.presidentSection}>
//             <div className={s.photoBlock}>
//               <Image
//                 src={imgD}
//                 alt='President photo'
//                 priority
//                 className={s.photo}
//               />
//             </div>
//             <div className={s.textBlock}>
//               <h2 className={s.title}>Julia Kuznetsova</h2>
//               <p className={s.position}>JCI Ukraine President</p>
//               <p className={s.description}>
//                 As National President, Kuznetsova is responsible for overseeing
//                 JCI&apos;s operations and initiatives in Ukraine, and leading
//                 the organisation&apos;s efforts to engage and empower young
//                 people in the country. Her role also involves representing JCI
//                 Ukraine at the international level and collaborating with other
//                 JCI chapters around the world.
//               </p>
//             </div>
//           </div>
//         </Container>
//       )}
//     </Section>
//   );
// };

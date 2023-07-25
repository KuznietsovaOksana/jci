import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { Container } from '@/components/Container';
import { Title } from '@/components/Title';

import { partnersImages } from './partnersImages';
import s from './PartnersSection.module.css';

export const PartnersSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <section className={s.partners_section}>
      <Container>
        <Title tag='h2' className={s.partners_text}>
          We are grateful to our partners for their&nbsp;
          <span className={s.blue_text}>support.</span>
        </Title>
        <ul className={s.partners_list}>
          {isMobile &&
            partnersImages.map(imgData => (
              <li className={s.partners_item} key={imgData.id}>
                <Image
                  src={imgData.srcM}
                  width={imgData.wM}
                  height={imgData.hM}
                  alt={'partner logo'}
                  loading='lazy'
                />
              </li>
            ))}
          {isTablet &&
            partnersImages.map(imgData => (
              <li className={s.partners_item} key={imgData.id}>
                <Image
                  src={imgData.srcT}
                  width={imgData.wT}
                  height={imgData.hT}
                  alt={'partner logo'}
                  loading='lazy'
                />
              </li>
            ))}
          {isDesktop &&
            partnersImages.map(imgData => (
              <li className={s.partners_item} key={imgData.id}>
                <Image
                  src={imgData.srcD}
                  width={imgData.wD}
                  height={imgData.hD}
                  alt={'partner logo'}
                  loading='lazy'
                />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};

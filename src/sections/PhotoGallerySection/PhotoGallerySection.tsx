import Image from 'next/image';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import Lightbox from 'yet-another-react-lightbox';
import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

import s from './PhotoGallerySection.module.css';

import { Container } from '@/components/Container';
import { images, imagesForDesk } from './images';
import LeftArrow from 'public/icons/chevron_Left.svg';
import RightArrow from 'public/icons/chevron_Right.svg';
import { useScreen } from '@/hooks/use_screen';

export const PhotoGallerySection = () => {
  const { isMobile } = useScreen();
  const [index, setIndex] = useState(-1);

  const width = isMobile ? 252 : 288;

  return (
    <section className={s.section_photo_gallery}>
      <MediaQuery maxWidth={1439.9}>
        <Container>
          <h3 className={s.photo_gallery_title}>
            <span className={s.photo_gallery_title_span}>
              A photo gallery of{' '}
            </span>
            Humanitarian projects
          </h3>
        </Container>
        <div className='gallerySliderContainer '>
          <div className='gallerySliderImages '>
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index}>
                <Image
                  onClick={() => setIndex(index)}
                  className={s.picture}
                  src={src}
                  width={width}
                  height={388}
                  alt={alt}
                  style={{ objectFit: 'cover' }}
                  loading='lazy'
                />
                <div className={s.div_tablet}></div>
              </SwiperSlide>
            ))}
          </div>
        </div>
        <Lightbox
          className={s.light_box}
          render={{
            iconPrev: () => {
              return (
                <div className={s.box_arrow}>
                  <LeftArrow className={s.arrow} />
                </div>
              );
            },
            iconNext: () => {
              return (
                <div className={s.box_arrow}>
                  <RightArrow className={s.arrow} />
                </div>
              );
            },
          }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
          styles={{
            container: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
          }}
        />
      </MediaQuery>

      <MediaQuery minWidth={1440}>
        <Container>
          <h3 className={s.photo_gallery_title}>
            <span className={s.photo_gallery_title_span}>
              A photo gallery of{' '}
            </span>
            Humanitarian projects
          </h3>
          <ul className={s.gallery__grides}>
            {imagesForDesk.map(({ src, alt, heightDeck }, index) => (
              <li className={s.gallery__grid__item} key={index}>
                <Image
                  onClick={() => setIndex(index)}
                  className={s.picture}
                  src={src}
                  width={360}
                  height={heightDeck}
                  alt={alt}
                  style={{ objectFit: 'cover' }}
                  loading='lazy'
                />
              </li>
            ))}
          </ul>
        </Container>
        <Lightbox
          className={s.light_box}
          render={{
            iconPrev: () => {
              return (
                <div className={s.box_arrow}>
                  <LeftArrow className={s.arrow} />
                </div>
              );
            },
            iconNext: () => {
              return (
                <div className={s.box_arrow}>
                  <RightArrow className={s.arrow} />
                </div>
              );
            },
          }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={imagesForDesk}
          styles={{
            container: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
            icon: {
              width: '60px',
              height: '60px',
            },
          }}
        />
      </MediaQuery>
    </section>
  );
};

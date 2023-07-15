import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

import s from './PhotoGallerySection.module.css';

import { Container } from '@/components/Container';
import { images, imagesForDesk } from './images';
import { useScreen } from '@/hooks/use_screen';

export const PhotoGallerySection = () => {
  const { isMobile } = useScreen();
  const width = isMobile ? 252 : 288;
  // const

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
      </MediaQuery>
    </section>
  );
};

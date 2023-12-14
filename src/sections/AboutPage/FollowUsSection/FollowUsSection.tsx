import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});
import Image from 'next/image';

import Photo1 from 'public/images/follow/fb-photo-1.png';
import Photo2 from 'public/images/follow/fb-photo-2.png';
import Photo3 from 'public/images/follow/fb-photo-3.png';
import Photo4 from 'public/images/follow/fb-photo-4.png';

import Arrow from 'public/icons/arrow-follow.svg';

import { Title } from '@/components/typography/Title';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';

import s from './FollowUsSection.module.css';

export const FollowUsSection = () => {
  const photos = [Photo1, Photo2, Photo3, Photo4];
  const photosWeb = [Photo1, Photo2, Photo3];

  return (
    <Section className={s.section}>
      <MediaQuery maxWidth={1439.9}>
        <div className={s.titleWrapper}>
          <Title className={s.title}>
            Follow us on
            <MediaQuery maxWidth={767}>
              <br />
            </MediaQuery>
            <span className={s.titleAcent}> Facebook</span>
          </Title>
          <a
            href='https://www.facebook.com/jci.ukraine.official'
            target='_blank'
            rel='noopener noreferrer nofollow'
            className={s.fbLink}
          >
            Go to Facebook
            <Arrow />
          </a>
        </div>
        <div className='followSliderContainer'>
          <div className='followSliderCards'>
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className={s.photo}
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1440}>
        <Container>
          <div className={s.titleWrapper}>
            <Title className={s.title}>
              Follow us on
              <span className={s.titleAcent}> Facebook</span>
            </Title>
            <a
              href='https://www.facebook.com/jci.ukraine.official'
              target='_blank'
              rel='noopener noreferrer nofollow'
              className={s.fbLink}
            >
              Go to Facebook <Arrow />
            </a>
          </div>
          <div className={s.photoWrapper}>
            {photosWeb.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className={s.photo}
              />
            ))}
          </div>
        </Container>
      </MediaQuery>
    </Section>
  );
};

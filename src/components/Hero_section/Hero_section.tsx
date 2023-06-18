import { Container } from '../Container/Container';
import { MainButton } from '../ui-kit/buttons/MainButton/MainButton';
import HeroSlider from '../ui-kit/sliders/HeroSlider/HeroSlider';
import { images } from './images';

export const HeroSection = () => {
  return (
    <section>
      <Container>
        <MainButton
          type='button'
          text='Join us'
          style='primary'
          paddings={60}
        />
        <MainButton
          type='button'
          text='Donate'
          style='secondary'
          paddings={150}
        />
        <MainButton type='button' text='Read more' style='primary' />
        <HeroSlider images={images} />
      </Container>
    </section>
  );
};

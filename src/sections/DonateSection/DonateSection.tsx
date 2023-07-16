import { Container } from '@/components/Container';
import { MainButton } from '@/components/ui-kit/buttons/MainButton';

import s from './DonateSaction.module.css';

export const DonateSection = () => {
  return (
    <section className={s.donate_section}>
      <Container>
        <p className={s.donate_text}>
          Opportunity to help: donate to sustainable projects!
        </p>
        <MainButton
          className={s.donate_btn}
          onClick={() => {
            console.log('donate click');
          }}
          type='button'
          text='Donate'
          paddings={117}
          style='primary'
        />
      </Container>
    </section>
  );
};
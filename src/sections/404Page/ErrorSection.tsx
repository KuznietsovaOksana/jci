import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { MainButton } from '@/components/buttons/MainButton';
import { Title } from '@/components/typography/Title';

import NumberFour from 'public/icons/4.svg';
import NumberZero from 'public/icons/0.svg';

import s from './ErrorSection.module.css';

export const ErrorSection = () => {
  const { t } = useTranslation('common');
  const { t: error_t } = useTranslation('errorPage');

  const router = useRouter();
  return (
    <section className={s.section_404}>
      <Container>
        <ul className={s.list_number}>
          <li>
            <NumberFour className={s.number} />
          </li>
          <li>
            <NumberZero className={s.number_0} />
          </li>
          <li>
            <NumberFour className={s.number} />
          </li>
        </ul>
        <Title tag='h2' isBlue>
          {error_t('not_found')}
        </Title>
        <p className={s.text}>{error_t('message_error')}</p>
        <MainButton
          className={s.button}
          text={t('buttons.page_error')}
          style='secondaryNavy'
          onClick={() => router.back()}
        />
      </Container>
    </section>
  );
};

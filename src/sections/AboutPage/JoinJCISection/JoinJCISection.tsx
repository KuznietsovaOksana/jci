import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { MainButton } from '@/components/buttons/MainButton';
import { Container } from '@/components/common/Container';

import { useScreen } from '@/hooks/use_screen';
import { router } from '@/utils/routes';

import joinjci from 'public/images/about/joinjci/joinjci.jpg';

import s from './JoinJCISection.module.css';

export const JoinJCISection = () => {
  const { isMobile, isTablet } = useScreen();
  const { t: whoWeArePageT } = useTranslation('whoWeArePage');
  const { t: commonT } = useTranslation('common');

  return (
    <section className={s.join_jci_section}>
      <Container>
        <div className={s.join_jci_box}>
          <div className={s.join_jci_content}>
            <h2 className={s.join_jci_title}>
              {whoWeArePageT('join_jci_section.title_1')}
              <span className={s.join_jci_span_title}>
                {whoWeArePageT('join_jci_section.span_title')}
              </span>
              {whoWeArePageT('join_jci_section.title_2')}
            </h2>
            <MainButton
              href={router.JOINUS}
              text={commonT('buttons.join')}
              style='primaryNavy'
              className={s.join_jci_button}
            />
          </div>
          <Image
            src={joinjci}
            alt={whoWeArePageT('join_jci_section.alt')}
            width={isMobile ? 288 : isTablet ? 552 : 648}
            height={isMobile ? 187 : isTablet ? 349 : 472}
            style={{ objectFit: 'cover' }}
            className={s.join_jci_photo}
          />
        </div>
      </Container>
    </section>
  );
};

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import NumberFour from 'public/icons/4.svg';
import NumberZero from 'public/icons/0.svg';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Header } from '@/layout/Header';
import { Container } from '@/components/common/Container';
import { Title } from '@/components/typography/Title';

import s from '@/pages/404/Error.module.css';
import { MainButton } from '@/components/buttons/MainButton';
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>JCI</title>
        <meta name='description' content='JCI site' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {showModal && (
        <Portal>
          <ModalMenu setShowModal={setShowModal} />
        </Portal>
      )}
      <Header setShowModal={setShowModal} />
      <main>
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
              Oops, page not found
            </Title>
            <p className={s.text}>
              The page you are looking for was moved, removed, renamed, or might
              never existed.
            </p>
            <MainButton
              className={s.button}
              text={t('buttons.page_error')}
              style='secondaryNavy'
              onClick={() => router.back()}
            />
          </Container>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
      ])),
    },
  };
}

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Header } from '@/layout/Header';
import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { ErrorSection } from '@/sections/404Page';

export default function ErrorPage() {
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
      <div className='error_page'>
        <Header setShowModal={setShowModal} />
        <main>
          <ErrorSection />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'errorPage',
      ])),
    },
  };
}

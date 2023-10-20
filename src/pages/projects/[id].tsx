import { useEffect, useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';

import { WaysToHelpSection } from '@/sections/CurrentProjectPage/WaysToHelpSection';
import { OtherProjectsSection } from '@/sections/CurrentProjectPage/OtherProjectsSection';
import { IntroSection } from '@/sections/CurrentProjectPage/IntroSection';
import { CompletedIntroSection } from '@/sections/CurrentProjectPage/CompletedIntroSection';

export default function CurrentProject() {
  const [showModal, setShowModal] = useState(false);
  const [isProjectCompleted, setIsProjectCompleted] = useState(false);

  useEffect(() => {
    // Цей код виконується кожного разу, коли змінюється isProjectCompleted
  }, [isProjectCompleted]);

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
      <Layout setShowModal={setShowModal}>
        <main className='first_section'>
          {isProjectCompleted ? <CompletedIntroSection /> : <IntroSection />}
          <button
            className='omgBtn'
            onClick={() => setIsProjectCompleted(!isProjectCompleted)}
            style={{ display: 'block', margin: '0 auto', padding: '24px' }}
          >
            Змінити стан проекту
          </button>
          {/* <TabsSection /> */}
          <WaysToHelpSection />
          <OtherProjectsSection />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'projectPage',
      ])),
    },
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];

  const enPaths = paths.map(path => ({
    ...path,
    locale: 'en',
  }));

  const ukPaths = paths.map(path => ({
    ...path,
    locale: 'uk',
  }));

  return {
    paths: [...enPaths, ...ukPaths],
    fallback: false,
  };
}

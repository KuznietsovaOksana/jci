import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';

import { WaysToHelpSection } from '@/sections/CurrentProjectPage/WaysToHelpSection';
import { OtherProjectsSection } from '@/sections/CurrentProjectPage/OtherProjectsSection';
import { TabsSection } from '@/sections/CurrentProjectPage/TabsSection';
import { IntroSection } from '@/sections/CurrentProjectPage/IntroSection';

export default function CurrentProject() {
  const [showModal, setShowModal] = useState(false);
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
        <main>
          <IntroSection />
          <TabsSection />
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

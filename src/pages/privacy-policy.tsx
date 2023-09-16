import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import PrivacyPolicySection from '@/sections/PrivacyPolicyPage/PrivacyPolicySection/PrivacyPolicySection';

export default function PrivacyPolicy() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>JCI Privacy Policy</title>
        <meta name='description' content='JCI Privacy Policy' />
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
          <PrivacyPolicySection />
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
        'privacyPolicyPage',
      ])),
    },
  };
}

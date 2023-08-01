import { useState } from 'react';
import Head from 'next/head';

import { Portal } from '@/components/Portal';
import { ModalMenu } from '@/components/ModalMenu';
import { Layout } from '@/layout/Layout';

import { WaysToHelpSection } from '@/sections/CurrentProjectPage/WaysToHelpSection';
import { OtherProjectsSection } from '@/sections/CurrentProjectPage/OtherProjectsSection';

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
          <WaysToHelpSection />
          <OtherProjectsSection />
        </main>
      </Layout>
    </>
  );
}

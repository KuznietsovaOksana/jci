import { useState } from 'react';
import Head from 'next/head';

import { Portal } from '@/components/Portal';
import { ModalMenu } from '@/components/ModalMenu';
import { Layout } from '@/components/Layout';
import { ProjectSectionPP } from '@/sections/ProjectPage/ProjectSection';
import { QuoteSection } from '@/sections/QuoteSection';
import { CompleteProjectSection } from '@/sections/CompletedProjectSection';
import { PhotoGallerySection } from '@/sections/PhotoGallerySection';

export default function Projects() {
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
          <ProjectSectionPP />
          <QuoteSection />
          <CompleteProjectSection />
          <PhotoGallerySection />
        </main>
      </Layout>
    </>
  );
}

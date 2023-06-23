import Head from 'next/head';
import { useState } from 'react';

import { Layout } from '@/components/Layout';
import { Portal } from '@/components/Portal';
import { ModalMenu } from '@/components/ModalMenu';
import { WarSection } from '@/sections/WarSection';
import { FAQSection } from '@/sections/FAQSection';
import { NewsSection } from '@/sections/NewsSection';
import { HeroSection } from '@/sections/HeroSection';
import { ProjectSection } from '@/sections/ProjectSection';
import { TogetherSection } from '@/sections/TogetherSection';
import { CharacteristicSection } from '@/sections/CharacteristicSection';

export default function Home() {
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
          <HeroSection />
          <CharacteristicSection />
          <WarSection />
          <TogetherSection />
          <ProjectSection />
          <NewsSection />
          <FAQSection />
        </main>
      </Layout>
    </>
  );
}

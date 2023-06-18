import { useState } from 'react';
import Head from 'next/head';
import CharacteristicSection from '@/components/Characteristic_section/Characteristic_section';
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import ProjectSection from '@/components/Project_section/Project_section';
import { Portal } from '@/components/Portal/Portal';
import { ModalMenu } from '@/components/ModalMenu/ModalMenu';
import { WarSection } from '@/sections/WarSection';
import { TogetherSection } from '@/sections/TogetherSection';
import { FAQSection } from '@/sections/FAQSection';
import { NewsSection } from '@/sections/NewsSection/NewsSection';

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

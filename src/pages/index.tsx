import Head from 'next/head';
import { useState } from 'react';

import { Layout } from '@/layout/Layout';
import { Portal } from '@/components/Portal';
import { ModalMenu } from '@/components/ModalMenu';
import { WarSection } from '@/sections/MainPage/WarSection';
import { FAQSection } from '@/sections/MainPage/FAQSection';
import { NewsSection } from '@/sections/MainPage/NewsSection';
import { HeroSection } from '@/sections/MainPage/HeroSection';
import { ProjectSection } from '@/sections/MainPage/ProjectSection';
import { DonateSection } from '@/sections/MainPage/DonateSection';
import { donateText } from '@/components/Section/DonateSectionComponent';
import { TogetherSection } from '@/sections/MainPage/TogetherSection';
import { CharacteristicSection } from '@/sections/MainPage/CharacteristicSection';
import { OurPresident } from '@/sections/MainPage/OurPresident';
import { ImpactSection } from '@/sections/MainPage/ImpactSection';

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
          <ImpactSection />
          <WarSection />
          <TogetherSection />
          <ProjectSection />
          <DonateSection heading={donateText.donate} />
          <NewsSection />
          <OurPresident />
          <FAQSection />
        </main>
      </Layout>
    </>
  );
}

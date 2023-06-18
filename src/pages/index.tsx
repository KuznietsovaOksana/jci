import { useState } from 'react';
import Head from 'next/head';
// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import CharacteristicSection from '@/components/Characteristic_section/Characteristic_section';
// import { Container } from '@/components/Container/Container';
import Layout from '@/components/Layout';
import { HeroSection } from '@/components/Hero_section/Hero_section';
import ProjectSection from '@/components/Project_section/Project_section';
import { Portal } from '@/components/Portal/Portal';
import { ModalMenu } from '@/components/ModalMenu/ModalMenu';
import { WarSection } from '@/sections/WarSection/WarSection';
import TogetherSection from '@/components/Together_section/Together_section';
import { FAQSection } from '@/sections/FAQSection/FAQSection';

// const inter = Inter({ subsets: ['latin'] });

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
        <main
        // className={`${styles.main} ${inter.className}`}
        >
          <div>
            <HeroSection />
            <CharacteristicSection />
            <WarSection />
            <TogetherSection />
            <ProjectSection />
            <FAQSection />
          </div>
        </main>
      </Layout>
    </>
  );
}

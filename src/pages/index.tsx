'use client';

import Head from 'next/head';
import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { fetchMain } from '@/lib/api';
import { Layout } from '@/layout/Layout';
import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { WarSection } from '@/sections/MainPage/WarSection';
import { FAQSection } from '@/sections/MainPage/FAQSection';
import { NewsSection } from '@/sections/MainPage/NewsSection';
import { HeroSection } from '@/sections/MainPage/HeroSection';
import { ProjectSection } from '@/sections/MainPage/ProjectSection';
import { DonateSection } from '@/sections/MainPage/DonateSection';
import { TogetherSection } from '@/sections/MainPage/TogetherSection';
import { CharacteristicSection } from '@/sections/MainPage/CharacteristicSection';
import { OurPresident } from '@/sections/MainPage/OurPresident';
import { ImpactSection } from '@/sections/MainPage/ImpactSection';
import { PartnersSection } from '@/sections/MainPage/PartnersSection';

import { IMainApiProps } from '@/types/typesApiProps';

export default function Home({
  faqData,
  achievementsData,
  presidentData,
}: IMainApiProps) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation('mainPage');

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
          <TogetherSection achievementsData={achievementsData} />
          <ProjectSection />
          <DonateSection heading={t('donate.text')} />
          <NewsSection />
          <PartnersSection />
          <OurPresident presidentData={presidentData} />
          <FAQSection faqData={faqData} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const faqData = await fetchMain('faq');
  const achievementsData = await fetchMain('achievements');
  const presidentData = await fetchMain('jci-ukraine-president');

  return {
    props: {
      faqData,
      achievementsData,
      presidentData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'mainPage',
      ])),
    },
  };
}

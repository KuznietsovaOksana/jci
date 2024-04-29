'use client';

import Head from 'next/head';
import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { fetchMain, fetchNews } from '@/lib/api';
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
import { compareDates } from '@/services/sortNews';
import { fetchProjects } from '../lib/api';
import { compareNumbers } from '@/services/sortProjects';

export default function Home({
  faqData,
  achievementsData,
  presidentData,
  heroData,
  partnersData,
  mediaData,
  newsData,
  projectsData,
}: IMainApiProps) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation('mainPage');

  return (
    <>
      <Head>
        <title>JCI</title>
        <meta name='description' content='JCI site' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta property='og:title' content='JCI' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='' />
        <meta property='og:image' content={'/ogp.jpg'} />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='300' />
        <meta property='og:image:height' content='300' />
        <meta property='og:image:alt' content='JCI' />
        <meta property='og:description' content='JCI is waiting for you' />
        <meta property='og:locale' content='en_EN' />
      </Head>
      {showModal && (
        <Portal>
          <ModalMenu setShowModal={setShowModal} />
        </Portal>
      )}
      <Layout setShowModal={setShowModal}>
        <main>
          <HeroSection heroData={heroData} />
          <CharacteristicSection />
          <ImpactSection mediaData={mediaData} />
          <WarSection />
          <TogetherSection achievementsData={achievementsData} />
          <ProjectSection projectsData={projectsData} />
          <DonateSection heading={t('donate.text')} />
          <NewsSection newsData={newsData} />
          <PartnersSection partnersData={partnersData} />
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
  const heroData = await fetchMain('main-banner');
  const partnersData = await fetchMain('partners');
  const mediaData = await fetchMain('media');
  const newsData = await fetchNews();
  newsData.sort(compareDates);
  const projectsData = await fetchProjects();
  partnersData.sort(compareNumbers);

  return {
    props: {
      faqData,
      achievementsData,
      presidentData,
      heroData,
      partnersData,
      mediaData,
      newsData,
      projectsData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'mainPage',
      ])),
    },
  };
}

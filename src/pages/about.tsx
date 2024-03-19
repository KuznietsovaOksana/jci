import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import { FollowUsSection } from '@/sections/AboutPage/FollowUsSection';
import { ChangeWorldSection } from '@/sections/AboutPage/ChangeWorldSection/ChangeWorldSection';
import { JoinTeamSection } from '@/sections/AboutPage/JoinTeamSection/JoinTeamSection';
import { fetchMemberCard, fetchPhotoGallery } from '@/lib/api';
import { IAboutApiProps } from '@/types/typesApiProps';
import { TeamSection } from '@/sections/AboutPage/TeamSection/TeamSection';
import { MainSection } from '@/sections/AboutPage/MainSection/MainSection';
import { CharacteristicSection } from '@/sections/MainPage/CharacteristicSection';
import { JciDevInitSection } from '@/sections/AboutPage/JciDevInitSection';
import { QuoteSection } from '@/sections/AboutPage/QuoteSection';
import { BenefitsOfMembershipSection } from '@/sections/AboutPage/BenefitsOfMembershipSection';
import { JoinJCISection } from '@/sections/AboutPage/JoinJCISection';

export default function About({
  memberCardData,
  photoMainBannerData,
}: IAboutApiProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>JCI About</title>
        <meta name='description' content='JCI Contacts page' />
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
          <MainSection photoMainBannerData={photoMainBannerData} />
          <CharacteristicSection />
          <ChangeWorldSection />
          <JoinTeamSection />
          <QuoteSection />
          <BenefitsOfMembershipSection />
          <JciDevInitSection />
          <JoinJCISection />
          <TeamSection memberCardData={memberCardData} />
          <FollowUsSection />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const photoMainBannerData = await fetchPhotoGallery('photo-main-banner');
  const memberCardData = await fetchMemberCard();
  return {
    props: {
      photoMainBannerData,
      memberCardData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'whoWeArePage',
        'mainPage',
      ])),
    },
  };
}

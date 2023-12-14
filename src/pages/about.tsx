import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import { FollowUsSection } from '@/sections/AboutPage/FollowUsSection';
import { ChangeWorldSection } from '@/sections/AboutPage/ChangeWorldSection/ChangeWorldSection';
import { JoinTeamSection } from '@/sections/AboutPage/JoinTeamSection/JoinTeamSection';
import { fetchMemberCard } from '@/lib/api';
import { IMemberCardProps } from '@/types/typesApiProps';
import { TeamSection } from '@/sections/AboutPage/TeamSection/TeamSection';

export default function About({ memberCardData }: IMemberCardProps) {
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
          <ChangeWorldSection />
          <JoinTeamSection />
          <TeamSection memberCardData={memberCardData} />
          <FollowUsSection />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const memberCardData = await fetchMemberCard();
  return {
    props: {
      memberCardData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'whoWeArePage',
      ])),
    },
  };
}

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import { MemberCard } from '@/components/cards/MemberCard';
import { Section } from '@/components/sections/Section';
import { ChangeWorldSection } from '@/sections/AboutPage/ChangeWorldSection/ChangeWorldSection';
import { JoinTeamSection } from '@/sections/AboutPage/JoinTeamSection/JoinTeamSection';

interface Member {
  photo: string;
  name_surname_en: string;
  position_en: string;
  previous_experience_1_en: string;
  previous_experience_2_en: string;
  previous_experience_3_en: string;
  previous_experience_4_en: string;
  previous_experience_5_en: string;
}

export default function Team() {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState([] as Member[]);

  async function fetchData() {
    const url = 'https://jcibackend-jci.koyeb.app/member-card/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(members);
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
          <Section>
            {members.length > 0 ? (
              members.map((member, index) => (
                <MemberCard
                  key={index}
                  photo={member.photo}
                  nameSurname={member.name_surname_en}
                  position={member.position_en}
                  experience1={member.previous_experience_1_en}
                  experience2={member.previous_experience_2_en}
                  experience3={member.previous_experience_3_en}
                  experience4={member.previous_experience_4_en}
                  experience5={member.previous_experience_5_en}
                />
              ))
            ) : (
              <p>No members available.</p>
            )}
          </Section>
          <ChangeWorldSection />
          <JoinTeamSection />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'whoWeArePage',
      ])),
    },
  };
}

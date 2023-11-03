import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';

import { MainFuncBtn } from '@/components/buttons/MainFuncBtn';
import { RadioDefBtn } from '@/components/buttons/radioBtns/RadioDefBtn';
import { Section } from '@/components/sections/Section';
import { JoinUsSection } from '@/sections/JoinUsPage';

export default function JoinUs() {
  const [showModal, setShowModal] = useState(false);

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.id);
    console.log(event.target.id);
  };

  return (
    <>
      <Head>
        <title>Join Us</title>
        <meta name='description' content='Join Us' />
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
          <JoinUsSection />
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
      ])),
    },
  };
}

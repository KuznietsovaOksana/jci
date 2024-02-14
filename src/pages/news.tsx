import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import { fetchNews } from '@/lib/api';
import { INewsApiProps } from '@/types/typesApiProps';
import { LatestNewsSection } from '@/sections/NewsPage/LatestNewsSection';

export default function News({ newsData }: INewsApiProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>JCI News</title>
        <meta name='description' content='JCI News page' />
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
          <LatestNewsSection newsData={newsData} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const newsData = await fetchNews();
  return {
    props: {
      newsData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'newsPage',
        'mainPage',
      ])),
    },
  };
}

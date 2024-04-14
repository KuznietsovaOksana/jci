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
          <LatestNewsSection newsData={newsData} />
        </main>
      </Layout>
    </>
  );
}

function compareDates(
  a: { start_date: string },
  b: { start_date: string }
): number {
  return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
}

export async function getStaticProps({ locale }: { locale: string }) {
  const newsData = await fetchNews();
  newsData.sort(compareDates);

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

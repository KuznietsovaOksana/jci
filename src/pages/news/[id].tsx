import { useState } from 'react';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import { fetchNews } from '@/lib/api';
import { CurrentNewsSection } from '@/sections/CurrentNewsPage/CurrentNewsSection';
import { ILatestMewsItem } from '@/sections/NewsPage/LatestNewsSection/latestNewsProps';
import { ICurrentMewsProps } from '@/sections/CurrentNewsPage/CurrentNewsSection/currentNewsProps';

export default function CurrentNews({ news, currentNews }: ICurrentMewsProps) {
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
        <main className='padding_top_current_page'>
          <CurrentNewsSection news={news} currentNews={currentNews} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) {
  const currentPageId = params.id;
  const news = (await fetchNews()) as ILatestMewsItem[];
  const currentNews = news.find(
    (item: ILatestMewsItem) => item.id.toString() === currentPageId
  );
  if (!currentNews) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      news,
      currentNews,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'newsPage',
      ])),
    },
    revalidate: 30,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await fetchNews()) as ILatestMewsItem[];
  const ids = data.map((news: ILatestMewsItem) => news.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  const enPaths = paths.map(path => ({
    ...path,
    locale: 'en',
  }));

  const ukPaths = paths.map(path => ({
    ...path,
    locale: 'uk',
  }));

  return {
    paths: [...enPaths, ...ukPaths],
    fallback: false,
  };
};

import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import { ProjectSectionPP } from '@/sections/ProjectsPage/ProjectSection';
import { QuoteSection } from '@/sections/ProjectsPage/QuoteSection';
import { CompleteProjectSection } from '@/sections/ProjectsPage/CompletedProjectSection';
import { PhotoGallerySection } from '@/sections/ProjectsPage/PhotoGallerySection';
import { fetchProjects } from '@/lib/api';
import { compareNumbers } from '@/services/sortProjects';
import { IProjectsApiProps } from '@/types/typesApiProps';

export default function Projects({ projectsData }: IProjectsApiProps) {
  const [showModal, setShowModal] = useState(false);

  const notCompletedProjects = projectsData.filter(el => !el.done);
  const completedProjects = projectsData.filter(el => el.done);

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
          <ProjectSectionPP projectsData={notCompletedProjects} />
          <QuoteSection />
          <CompleteProjectSection projectsData={completedProjects} />
          <PhotoGallerySection />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const projectsData = await fetchProjects();
  projectsData.sort(compareNumbers);
  return {
    props: {
      projectsData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'projectsPage',
      ])),
    },
    revalidate: 30,
  };
}

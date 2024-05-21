import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';

import { WaysToHelpSection } from '@/sections/CurrentProjectPage/WaysToHelpSection';
import { OtherProjectsSection } from '@/sections/CurrentProjectPage/OtherProjectsSection';
import { IntroSection } from '@/sections/CurrentProjectPage/IntroSection';
// import { CompletedIntroSection } from '@/sections/CurrentProjectPage/CompletedIntroSection';
import { GetStaticPaths } from 'next';
import { fetchProjects } from '@/lib/api';
import {
  ICurrentProject,
  IProjectItem,
} from '@/sections/ProjectsPage/lProjectsProps';

export default function CurrentProject({
  currentProject,
  projects,
}: ICurrentProject) {
  const [showModal, setShowModal] = useState(false);
  // const [isProjectCompleted, setIsProjectCompleted] = useState(false);

  // useEffect(() => {
  // }, [isProjectCompleted]);

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
          <IntroSection currentProject={currentProject} />
          {/* {isProjectCompleted ? <CompletedIntroSection /> : <IntroSection />} */}
          {/* <button
            className='omgBtn'
            onClick={() => setIsProjectCompleted(!isProjectCompleted)}
            style={{ display: 'block', margin: '0 auto', padding: '24px' }}
          >
            Змінити стан проекту
          </button> */}
          {/* <TabsSection /> */}
          <WaysToHelpSection />
          <OtherProjectsSection projects={projects} />
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
  // const currentProject = (await fetchProjects(currentPageId)) as IProjectItem;

  const projects = (await fetchProjects()) as IProjectItem[];
  const currentProject = projects.find(
    (item: IProjectItem) => item.id.toString() === currentPageId
  );

  if (!currentProject) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      currentProject,
      projects,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'navigation',
        'projectPage',
      ])),
    },
    revalidate: 30,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await fetchProjects()) as IProjectItem[];
  const ids = data.map((project: IProjectItem) => project.id);
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

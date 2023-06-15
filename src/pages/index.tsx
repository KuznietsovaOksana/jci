import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import CharacteristicSection from '@/components/Characteristic_section/Characteristic_section';
// import Header from '@/components/Header_Layout/Header_Layout';
import { Container } from '@/components/Container/Container';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>JCI</title>
        <meta name='description' content='JCI site' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Layout>
          <main className={`${styles.main} ${inter.className}`}>
            <div>
              <p>Beginning</p>

              <CharacteristicSection />
            </div>
          </main>
        </Layout>
      </Container>
    </>
  );
}

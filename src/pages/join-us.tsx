import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Portal } from '@/components/common/Portal';
import { ModalMenu } from '@/components/header/ModalMenu';
import { Layout } from '@/layout/Layout';
import TermsSection from '@/sections/TermsPage/TermsSection/TermsSection';
import { MainFuncBtn } from '@/components/buttons/MainFuncBtn';
import { RadioDefBtn } from '@/components/buttons/radioBtns/RadioDefBtn';
import { RadioCusBtn } from '@/components/buttons/radioBtns/RadioCusBtn';

export default function JoinUs() {
  const [showModal, setShowModal] = useState(false);

  const divStyle = {
    
    padding: '100px', // Задайте внутрішні відступи
    backgroundColor: '#D8E1EF',
  };


  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.id);
    const inputValueId = `#${event.target.id}InputValue`
    const inputValue = document.querySelector(inputValueId);
    console.log(event.target.id);
    console.log(inputValue.value);
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
          {/* <TermsSection /> */}
          {/* <p style={divStyle}>asdfghsga</p> */}
          <MainFuncBtn text='Send' onClick={()=>console.log("Click")} />
          <div style={divStyle}>
            <RadioDefBtn 
            id='option1' 
            name='option1' 
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
            label='option1'  
          />
          <RadioDefBtn 
            id='option2' 
            name='option2' 
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
            label='option2'  
          />
          <RadioCusBtn
            id='option3' 
            name='Other' 
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
            label='Other'
          />
          </div>
          
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
        'termsPage',
      ])),
    },
  };
}

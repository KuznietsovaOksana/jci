import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CopyIcon from 'public/icons/copy.svg';
import CopiedIcon from 'public/icons/copied.svg';

import { useScreen } from '@/hooks/use_screen';

import s from './TabsDonationInfo.module.css';
import { useCurrency } from '@/hooks/use_currency';

interface ITabInfoProps {
  numberTab: number;
}

export const TabsDonationInfo: FC<ITabInfoProps> = ({ numberTab }) => {
  const { t } = useTranslation('donationPage');
  const { isDesk } = useScreen();
  const { uanNumber, usaNumber, euroNumber, onCopy } = useCurrency();

  // uan

  const arrayUan = [
    { title: t('tabs.company'), description: t('info.uan.company') },
    { title: t('tabs.iban'), description: t('info.uan.iban_code') },
    { title: t('tabs.id-code'), description: t('info.uan.id_code') },
    { title: t('tabs.bank'), description: t('info.uan.bank') },
  ];

  // usd
  const arrayUsd = [
    { title: t('tabs.company_euro_usa'), description: t('info.usd.company') },
    { title: t('iban_euro_usa'), description: t('info.usd.iban_code') },
    { title: t('tabs.bank'), description: t('info.usd.bank') },
    { title: t('tabs.swift'), description: t('info.usd.swift') },
    { title: t('tabs.address'), description: t('info.usd.address') },
  ];

  const elUsd1 = {
    title: t('tabs.correspondent'),
    description: t('info.usd.correspondent1'),
  };
  const elUsd2 = {
    title: t('tabs.correspondent'),
    description: t('info.usd.correspondent2'),
  };
  const elUsd3 = {
    title: t('tabs.correspondent'),
    description: t('info.usd.correspondent3'),
  };
  const arrayUsdCorrespondent = [elUsd1, elUsd2, elUsd3];

  // euro
  const arrayEuro = [
    { title: t('tabs.company_euro_usa'), description: t('info.euro.company') },
    { title: t('iban_euro_usa'), description: t('info.euro.iban_code') },
    { title: t('tabs.bank'), description: t('info.euro.bank') },
    { title: t('tabs.swift'), description: t('info.euro.swift') },
    { title: t('tabs.address'), description: t('info.euro.address') },
  ];

  const elEuro1 = {
    title: t('tabs.correspondent'),
    description: t('info.euro.correspondent1'),
  };
  const elEuro2 = {
    title: t('tabs.correspondent'),
    description: t('info.euro.correspondent2'),
  };
  const arrayEuroCorrespondent = [elEuro1, elEuro2];

  return (
    <>
      {numberTab === 0 && (
        <ul className={s.list_currency}>
          {arrayUan.map((el, ind) => (
            <li key={ind} className={s.item_currency}>
              <h2 className={s.title}>{el.title}</h2>
              <p className={s.text}> {el.description}</p>
              <CopyToClipboard text={el.description ?? ''}>
                <button
                  type='button'
                  className={s.button_copy}
                  onClick={() => onCopy(ind, 'uan')}
                >
                  {uanNumber === ind
                    ? isDesk && t('tabs.copied')
                    : isDesk && t('tabs.copy')}

                  {uanNumber === ind ? (
                    <CopiedIcon className={s.icon_button} />
                  ) : (
                    <CopyIcon className={s.icon_button} />
                  )}
                </button>
              </CopyToClipboard>
            </li>
          ))}
        </ul>
      )}
      {numberTab === 1 && (
        <ul className={s.list_currency}>
          {arrayUsd.map((el, ind) => (
            <li key={ind} className={s.item_currency}>
              <h2 className={s.title}>{el.title}</h2>
              <p className={s.text}> {el.description}</p>
              <CopyToClipboard text={el.description}>
                <button
                  type='button'
                  className={s.button_copy}
                  onClick={() => onCopy(ind, 'usa')}
                >
                  {usaNumber === ind
                    ? isDesk && t('tabs.copied')
                    : isDesk && t('tabs.copy')}

                  {usaNumber === ind ? (
                    <CopiedIcon className={s.icon_button} />
                  ) : (
                    <CopyIcon className={s.icon_button} />
                  )}
                </button>
              </CopyToClipboard>
            </li>
          ))}
          {arrayUsdCorrespondent.map((el, ind) => (
            <li key={ind} className={s.item_currency}>
              {ind !== 0 && <span className={s.or}>{t('tabs.or')}</span>}
              <h2 className={s.title}>{el.title}</h2>
              <p className={`${s.text} ${s.text_correspondent}`}>
                {el.description}
              </p>
              <CopyToClipboard text={el.description}>
                <button
                  type='button'
                  className={s.button_copy}
                  onClick={() => onCopy(ind + arrayUsd.length, 'usa')}
                >
                  {usaNumber === ind + arrayUsd.length
                    ? isDesk && t('tabs.copied')
                    : isDesk && t('tabs.copy')}

                  {usaNumber === ind + arrayUsd.length ? (
                    <CopiedIcon className={s.icon_button} />
                  ) : (
                    <CopyIcon className={s.icon_button} />
                  )}
                </button>
              </CopyToClipboard>
            </li>
          ))}
        </ul>
      )}
      {numberTab === 2 && (
        <ul className={s.list_currency}>
          {arrayEuro.map((el, ind) => (
            <li key={ind} className={s.item_currency}>
              <h2 className={s.title}>{el.title}</h2>
              <p className={s.text}> {el.description}</p>
              <CopyToClipboard text={el.description}>
                <button
                  type='button'
                  className={s.button_copy}
                  onClick={() => onCopy(ind + arrayEuro.length, 'euro')}
                >
                  {euroNumber === ind + arrayEuro.length
                    ? isDesk && t('tabs.copied')
                    : isDesk && t('tabs.copy')}

                  {euroNumber === ind + arrayEuro.length ? (
                    <CopiedIcon className={s.icon_button} />
                  ) : (
                    <CopyIcon className={s.icon_button} />
                  )}
                </button>
              </CopyToClipboard>
            </li>
          ))}
          {arrayEuroCorrespondent.map((el, ind) => (
            <li key={ind} className={s.item_currency}>
              {ind !== 0 && <span className={s.or}>{t('tabs.or')}</span>}
              <h2 className={s.title}>{el.title}</h2>
              <p className={`${s.text} ${s.text_correspondent}`}>
                {el.description}
              </p>
              <CopyToClipboard text={el.description}>
                <button
                  type='button'
                  className={s.button_copy}
                  onClick={() => onCopy(ind, 'euro')}
                >
                  {euroNumber === ind
                    ? isDesk && t('tabs.copied')
                    : isDesk && t('tabs.copy')}

                  {euroNumber === ind ? (
                    <CopiedIcon className={s.icon_button} />
                  ) : (
                    <CopyIcon className={s.icon_button} />
                  )}
                </button>
              </CopyToClipboard>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import data from '@/data/tabsForDonationPage.json';
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

  const { uan, usd, euro } = data;
  // uan
  const arrayUan = [
    { title: t('tabs.company'), description: uan.company },
    { title: t('tabs.iban'), description: uan.iban_code },
    { title: t('tabs.id-code'), description: uan.id_code },
    { title: t('tabs.bank'), description: uan.bank },
  ];

  // usd
  const arrayUsd = [
    { title: t('tabs.company'), description: usd.company },
    { title: t('tabs.iban'), description: usd.iban_code },
    { title: t('tabs.bank'), description: usd.bank },
    { title: t('tabs.swift'), description: usd.swift },
    { title: t('tabs.address'), description: usd.address },
  ];

  const arrayUsdCorrespondent = usd.correspondents.map(el => {
    const element = {
      title: t('tabs.correspondent'),
      description: el,
    };

    return element;
  });

  // euro
  const arrayEuro = [
    { title: t('tabs.company'), description: euro.company },
    { title: t('tabs.iban'), description: euro.iban_code },
    { title: t('tabs.bank'), description: euro.bank },
    { title: t('tabs.swift'), description: euro.swift },
    { title: t('tabs.address'), description: euro.address },
  ];

  const arrayEuroCorrespondent = euro.correspondents.map(el => {
    const element = {
      title: t('tabs.correspondent'),
      description: el,
    };

    return element;
  });

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

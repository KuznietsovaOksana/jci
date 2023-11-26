import { FC } from 'react';

import { MainButton } from '@/components/buttons/MainButton';

import { SuccessScreenComponentProps } from './SuccessScreenComponent.props';
import s from './SuccessScreenComponent.module.css';

export const SuccessScreenComponent: FC<SuccessScreenComponentProps> = ({
  page,
  type,
  header,
  descr,
}) => {
  return (
    <div
      className={
        page === 'contacts' ? s.successScreen_contacts : s.successScreen
      }
    >
      {type === 'success' && (
        <p
          className={
            page === 'contacts'
              ? s.successScreen_header_contacts
              : s.successScreen_header
          }
        >
          {header}
        </p>
      )}
      <p
        className={
          page === 'contacts'
            ? s.successScreen_text_contacts
            : s.successScreen_text
        }
      >
        {descr}
      </p>
      <MainButton
        className={s.successScreen_btn}
        text='Go back to homepage'
        style='secondaryNavy'
        href='/'
      />
    </div>
  );
};

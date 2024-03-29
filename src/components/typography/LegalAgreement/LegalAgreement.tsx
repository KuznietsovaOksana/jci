import { FC } from 'react';

import { LegalAgreementProps } from './LegalAgreement.props';

import s from './LegalAgreement.module.css';

export const LegalAgreement: FC<LegalAgreementProps> = ({
  title,
  titleType,
  content,
}) => {
  const TitleTag = titleType || 'h3';

  return (
    <div className={s.component}>
      <TitleTag className={s.title}>{title}</TitleTag>
      {content.map((item, index) => {
        if (item.type === 'paragraph') {
          const isLastParagraph = index === content.length - 1;
          const paragraphStyle = isLastParagraph ? s.noMargin : s.margin;
          const combinedClassName = `${s.text} ${paragraphStyle}`;

          return (
            <p key={index} className={combinedClassName}>
              {item.text}
            </p>
          );
        } else if (item.type === 'list') {
          return (
            <ul key={index} className={s.margin}>
              {item?.items?.map((listItem, subIndex) => (
                <li key={subIndex}>{listItem}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
};

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
    <div>
      <TitleTag>{title}</TitleTag>
      {content.map((item, index) => {
        if (item.type === 'paragraph') {
          const isLastParagraph = index === content.length - 1;
          const paragraphStyle = isLastParagraph ? '' : 'margin';

          return (
            <p key={index} className={paragraphStyle}>
              {item.text}
            </p>
          );
        } else if (item.type === 'list') {
          return (
            <ul key={index}>
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

import React from 'react';

import { CharacteristicCardProps } from './CharacteristicCard.props';
import s from './CharacteristicCard.module.css';

export const CharacteristicCard: React.FC<CharacteristicCardProps> = ({
  icon,
  text,
}) => {
  const iconWithClass = React.cloneElement(icon as React.ReactElement, {
    className: `${s.characteristic_icon}`,
  });

  return (
    <li className={s.characteristic_card}>
      {iconWithClass}
      <p className={s.characteristic_title}>{text}</p>
    </li>
  );
};

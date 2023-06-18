import React from 'react';
import s from './MainButton.module.css';

interface ButtonProps {
  className?: string;
  type: 'button' | 'submit';
  text: string;
  icon?: JSX.Element;
  onClick?: () => void;
  style?: 'primary' | 'secondary';
  paddings?: number;
}

export const MainButton: React.FC<ButtonProps> = ({
  type = 'button',
  text,
  icon,
  onClick,
  style = 'primary',
  paddings,
  className,
}) => {
  const styles = {
    paddingLeft: `${paddings}px`,
    paddingRight: `${paddings}px`,
  };
  return (
    <button
      style={styles}
      onClick={onClick}
      type={type}
      className={`${s.mainBtn} ${s[style]} ${className}`}
    >
      {icon}
      {text}
    </button>
  );
};

MainButton.displayName = 'MainButton';

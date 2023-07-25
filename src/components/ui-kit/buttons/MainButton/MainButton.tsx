import React from 'react';
import s from './MainButton.module.css';

interface ButtonProps {
  className?: string;
  // type: 'button' | 'submit';
  text: string;
  icon?: JSX.Element;
  // onClick?: () => void;
  style?: 'primaryNavy' | 'secondaryNavy' | 'tertiaryNavy' | 'primaryBlue' | 'secondaryBlue';
  // paddings?: number;
  href?: string;
}

export const MainButton: React.FC<ButtonProps> = ({
  // type = 'button',
  text,
  icon,
  // onClick,
  style = 'primaryNavy',
  // paddings,
  className,
  href,
}) => {
  // const styles = {
  //   paddingLeft: `${paddings}px`,
  //   paddingRight: `${paddings}px`,
  // };
  return (
    <a
      href={href}
      // style={styles}
      // onClick={onClick}
      // type={type}
      className={`${s.mainBtn} ${s[style]} ${className}`}
    >
      {icon}
      {text}
    </a>
  );
};

MainButton.displayName = 'MainButton';

export interface ButtonProps {
  className?: string;
  text: string;
  style?: 'primaryNavy' | 'secondaryNavy' | 'primaryBlue' | 'secondaryBlue';
  href?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  className?: string;
  text: string;
  style?: 'primaryNavy' | 'secondaryNavy' | 'primaryBlue' | 'secondaryBlue';
  href?: string;
  // href?: any;
  onClick?: () => void;
}

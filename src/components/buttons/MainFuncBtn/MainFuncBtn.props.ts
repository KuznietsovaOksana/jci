export interface ButtonProps {
  className?: string;
  text: string;
  style?: 'primaryNavy' | 'secondaryNavy' | 'primaryBlue' | 'secondaryBlue';
  onClick?: () => void;
  access?: boolean;
}

import { ChangeEventHandler } from 'react';

export interface ButtonProps {
  id: string;
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

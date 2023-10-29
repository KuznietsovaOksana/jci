import { ChangeEventHandler } from 'react';

export interface InputProps {
  id?: string;
  name: string;
  type: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  captionText: string;
  innerText: string;
  helperText?: string;
  className?: string;
}

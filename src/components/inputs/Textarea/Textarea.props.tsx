import { ChangeEventHandler } from 'react';

export interface TextareaProps {
  id?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  captionText: string;
  innerText: string;
  helperText?: string;
  className?: string;
}

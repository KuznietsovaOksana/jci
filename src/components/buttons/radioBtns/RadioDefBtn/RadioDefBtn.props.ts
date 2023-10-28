export interface ButtonProps {
    id: string;
    name: string;
    value?: string;
    checked?: any;
    onChange?: (event:any) => void;
    label: string;
}
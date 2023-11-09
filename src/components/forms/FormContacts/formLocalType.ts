export interface IFormLocale {
  title: string;
  inputs: [
    {
      captionText: string;
      name: string;
      placeholder: string;
      type: string;
    }
  ];
  text_area: {
    captionText: string;
    name: string;
    placeholder: string;
    type: string;
  };
  button: string;
}

export interface IErrorLocale {
  required: string;
  format: string;
  email_symbol: string;
  domain: string;
}

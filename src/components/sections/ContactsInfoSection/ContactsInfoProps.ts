export interface ContactsInfo {
  title1: string;
  title2: string;
  title3: string;
  socials: string;
  info: [
    {
      contactType: string;
      href: string;
      content: string;
    }
  ];
}

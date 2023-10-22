interface IPartnerItem {
  id: number;
  url: string;
  logo: string;
  alt_text_partner_en: string;
  alt_text_partner_uk: string;
}

export interface IPartnersProps {
  partnersData: IPartnerItem[];
}

interface IPresidentItem {
  title_en: string;
  title_uk: string;
  subtitle_en: string;
  subtitle_uk: string;
  text_en: string;
  text_uk: string;
  photo_president: string;
  alt_text_president_en: string;
  alt_text_president_uk: string;
}

export interface IPresidentProps {
  presidentData: IPresidentItem[];
}

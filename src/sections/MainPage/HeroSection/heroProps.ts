interface IHeroItem {
  id: number;
  title_1_en: string;
  title_2_en: string;
  title_3_en: string;
  title_1_uk: string;
  title_2_uk: string;
  title_3_uk: string;
  subtitle_en: string;
  subtitle_uk: string;
  photo1: string;
  alt_text_1_en: string;
  alt_text_1_uk: string;
  photo2: string;
  alt_text_2_en: string;
  alt_text_2_uk: string;
  photo3: string;
  alt_text_3_en: string;
  alt_text_3_uk: string;
  show_flag_en: boolean;
  show_flag_uk: boolean;
}

export interface IHeroProps {
  heroData: IHeroItem[];
}

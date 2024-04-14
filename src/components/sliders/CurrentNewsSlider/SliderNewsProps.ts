export interface SliderNewsProps {
  images: SliderNewsItem[];
}

interface SliderNewsItem {
  id: string | number;
  photo: string;
  alt_text_uk: string;
  alt_text_en: string;
}

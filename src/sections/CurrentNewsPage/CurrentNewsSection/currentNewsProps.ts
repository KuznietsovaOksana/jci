export interface INews {
  id: 14;
  multimedia: [
    {
      id: number;
      photo: string;
      alt_text_en: string;
      alt_text_uk: string;
      card: number;
    }
  ];
  partners: [];
  start_date: string;
  event_category: string;
  published_archived: string;
  location_en: string;
  location_uk: string;
  title_en: string;
  title_uk: string;
  overview_en: string;
  overview_uk: string;
  agenda_en: string;
  agenda_uk: string;
  contact_information_en: string;
  contact_information_uk: string;
  order_number: number;
}

export interface ICurrentMewsProps {
  news: INews[];
  currentNews: INews;
}

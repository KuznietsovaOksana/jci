export interface ICalendarItem {
  id: number;
  all_dates: string[];
  start_date: string;
  finish_date: string;
  event_category: string;
  location_en: string;
  location_uk: string;
  title_en: string;
  title_uk: string;
  order_number: number;
}

export interface ICalendarProps {
  calendarData: ICalendarItem[];
}

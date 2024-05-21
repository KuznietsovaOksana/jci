import { ICalendarItem } from '@/sections/NewsPage/CalendarSection/CalendarSectionProps';

export function findLatestDate(array: ICalendarItem[]) {
  return array.reduce((latest, current) => {
    return new Date(current.finish_date) > new Date(latest.finish_date)
      ? current
      : latest;
  });
}

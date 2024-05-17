import { useTranslation } from 'next-i18next';
import { useLocalization } from '@/contexts/LocalizationContext';
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';
import { ICalendarProps } from './CalendarSectionProps';
import CloseMenu from 'public/icons/remove.svg';
import CalendarIcon from 'public/icons/Calendar.svg';
import LocationIcon from 'public/icons/Location2.svg';
import 'react-calendar/dist/Calendar.css';

import s from './CalendarSection.module.css';
import { useScreen } from '@/hooks/use_screen';

export const CalendarSection = ({ calendarData }: ICalendarProps) => {
  const { locale } = useLocalization();
  const { isDesk } = useScreen();

  const { t } = useTranslation('newsPage');

  const calendarRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();

  const [isMounted, setIsMounted] = useState(false);
  const [data, setData] = useState({
    start_date: '',
    finish_date: '',
    event_category: '',
    location_en: '',
    location_uk: '',
    title_en: '',
    title_uk: '',
  });
  const [isShown, setIsShown] = useState(false);
  const [value, onChange] = useState<Value>(currentDate);

  const handleDayClick = (value: Date) => {
    const matchingEvent = calendarData.find(event => {
      const eventDateStart = new Date(event.start_date);
      const eventDateFinish = new Date(event.finish_date);
      const startDate = new Date(
        eventDateStart.getFullYear(),
        eventDateStart.getMonth(),
        eventDateStart.getDate()
      );
      const finishDate = new Date(
        eventDateFinish.getFullYear(),
        eventDateFinish.getMonth(),
        eventDateFinish.getDate()
      );

      return value >= startDate && value <= finishDate;
    });

    if (matchingEvent) {
      setData({
        start_date: formatDate(matchingEvent.start_date),
        finish_date: formatDate(matchingEvent.finish_date),
        event_category: matchingEvent.event_category,
        location_en: matchingEvent.location_en,
        location_uk: matchingEvent.location_uk,
        title_en: matchingEvent.title_en,
        title_uk: matchingEvent.title_uk,
      });
      setIsShown(true);
      // console.log(matchingEvent);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsShown(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsShown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  function formatDate(dateString: string) {
    const formattedDate = dateString.replace(/-/g, '.');

    const [year, month, day] = formattedDate.split('.');

    return `${day}.${month}.${year}`;
  }
  return (
    <Section>
      <Container>
        <Title isBlue className={s.title}>
          {t('calendar.title')}
        </Title>

        <div className={'Sample__container__content'} ref={calendarRef}>
          <Calendar
            // maxDate={maxDate}
            // minDate={currentDate}
            prev2Label={null}
            next2Label={null}
            showDoubleView={isDesk ? true : false}
            onChange={onChange}
            showFixedNumberOfWeeks={false}
            selectRange={true}
            tileClassName={({ date }) => {
              return calendarData.some(event => {
                const eventDateStart = new Date(event.start_date);
                const eventDateFinish = new Date(event.finish_date);
                const startDate = new Date(
                  eventDateStart.getFullYear(),
                  eventDateStart.getMonth(),
                  eventDateStart.getDate()
                );
                const finishDate = new Date(
                  eventDateFinish.getFullYear(),
                  eventDateFinish.getMonth(),
                  eventDateFinish.getDate()
                );
                const tileDate = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate()
                );

                return tileDate >= startDate && tileDate <= finishDate;
              })
                ? 'highlighted-date'
                : null;
            }}
            onClickDay={(value: Date) => handleDayClick(value)}
            value={value}
          ></Calendar>
          {isShown && (
            <div className={s.info} ref={modalRef}>
              <button
                className={s.button_info}
                onClick={() => setIsShown(false)}
              >
                <CloseMenu />
              </button>
              <p className={s.title_info}>
                {locale === 'en' ? data.title_en : data.title_uk}
              </p>
              <p className={s.category_info}>{data.event_category}</p>
              <p className={s.date_info}>
                <CalendarIcon />
                {data.start_date} -<span>{data.finish_date}</span>
              </p>
              <p className={s.location_info}>
                <LocationIcon />
                {locale === 'en' ? data.location_en : data.location_uk}
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

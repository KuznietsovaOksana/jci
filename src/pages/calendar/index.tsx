import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Sample() {
  // mon date for showing - current date
  const currentDate = new Date();
  const maxDate = new Date(currentDate);
  // max date for showing - current date + 60 days
  maxDate.setDate(currentDate.getDate() + 60);
  // max date for showing - current date + 6 days
  const [isMounted, setIsMounted] = useState(false);
  const [value, onChange] = useState<Value>(currentDate);
  // array events from backend - examples
  const dataEvent1 = new Date(currentDate);
  const dataEvent2 = new Date(currentDate);
  dataEvent1.setDate(currentDate.getDate() + 3);
  dataEvent2.setDate(currentDate.getDate() + 5);
  const someEvent1 = { date: dataEvent1, text: 'ev1' };
  const someEvent2 = { date: dataEvent2, text: 'ev2' };
  const arrayEvents = [someEvent1, someEvent2];
  //  array events from backend - examples

  // function for output info from click events
  const handleDayClick = (value: Date) => {
    const matchingEvent = arrayEvents.find(event => {
      const eventDate = new Date(event.date);
      return (
        value.getFullYear() === eventDate.getFullYear() &&
        value.getMonth() === eventDate.getMonth() &&
        value.getDate() === eventDate.getDate()
      );
    });

    if (matchingEvent) {
      console.log(matchingEvent.text);
    }
  };
  // function for output info from from click events

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='Sample'>
      <header>
        <h1> Сalendar </h1>
      </header>
      <div className='Sample__container'>
        <main className='Sample__container__content'>
          <Calendar
            maxDate={maxDate}
            minDate={currentDate}
            prev2Label={null}
            next2Label={null}
            showDoubleView
            onChange={onChange}
            showFixedNumberOfWeeks={false}
            // set class for events
            tileClassName={({ date }) => {
              return arrayEvents.some(event => {
                const eventDate = new Date(event.date);
                return (
                  date.getFullYear() === eventDate.getFullYear() &&
                  date.getMonth() === eventDate.getMonth() &&
                  date.getDate() === eventDate.getDate()
                );
              })
                ? 'highlighted-date'
                : null;
            }}
            // add content for events
            tileContent={({ date }) => {
              const matchingEvents = arrayEvents.filter(event => {
                const eventDate = new Date(event.date);
                return (
                  date.getFullYear() === eventDate.getFullYear() &&
                  date.getMonth() === eventDate.getMonth() &&
                  date.getDate() === eventDate.getDate()
                );
              });

              if (matchingEvents.length > 0) {
                return (
                  <div className='tile-content'>
                    {matchingEvents.map((event, index) => (
                      <p key={index}>{event.text}</p>
                    ))}
                  </div>
                );
              }

              return null;
            }}
            onClickDay={(value: Date) => handleDayClick(value)}
            value={value}
          />
        </main>
      </div>
    </div>
  );
}

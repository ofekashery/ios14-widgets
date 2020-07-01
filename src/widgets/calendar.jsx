import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CalendarWidget = () => {
  const now = new Date();
  const dayName = days[now.getDay()];

  return (
    <div className="root widget">
      <h4 className="day-name">{dayName}</h4>
      <h3 className="day">{now.getDate()}</h3>

      <div className="event">
        <div className="event-color" />
        <div>
          <h5 className="event-name">WWDC Keynote</h5>
          <p className="event-location">Online</p>
          <span className="event-time">09:00 - 11:30</span>
        </div>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          width: 155px;
          height: 155px;
          color: var(--foreground);
          background: var(--background);
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
        }
        .day-name {
          color: var(--red);
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
          margin: 0;
        }
        .day {
          font-weight: 300;
          font-size: 36px;
          margin: 0;
        }
        .event {
          display: flex;
          flex-direction: row;
          margin-top: 12px;
          height: fit-content;
        }
        .event-color {
          height: 100%;
          width: 4px;
          border-radius: 4px;
          background: var(--indigo);
          margin-right: 6px;
        }
        .event-name {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }
        .event-location,
        .event-time {
          font-size: 12px;
          margin: 0;
        }
        .event-time {
          color: var(--gray-1);
        }
      `}</style>
    </div>
  );
};

export default CalendarWidget;

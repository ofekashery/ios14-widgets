import React from 'react';
import ListIcon from '../icons/list';

const RemindersWidget = () => {
  return (
    <div className="root widget">
      <h3 className="title">Reminders</h3>
      <span className="counter">4</span>
      <div className="icon">
        <ListIcon size={18} color="#fff" />
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          width: 155px;
          height: 155px;
          background: #fff;
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
        }
        :global(.dark-theme) .root {
          background: var(--gray-6);
        }
        .title {
          color: var(--orange);
          font-weight: 500;
          font-size: 16px;
          margin: 0;
        }
        .counter {
          color: var(--foreground);
          font-weight: 600;
          font-size: 24px;
          margin-top: 6px;
        }
        .icon {
          height: 32px;
          width: 32px;
          background: var(--orange);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
};

export default RemindersWidget;

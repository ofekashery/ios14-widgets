import React from 'react';
import FolderIcon from '../icons/folder';

const NotesWidget = () => {
  return (
    <div className="root widget">
      <div className="header">
        <FolderIcon color="rgba(255, 255, 255, 0.85)" />
      </div>
      <div className="content">
        <div className="item">
          <h5>Meeting Notes</h5>
          <p>6 Notes</p>
        </div>
        <div className="item">
          <h5>School</h5>
          <p>28 Notes</p>
        </div>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          width: 155px;
          height: 155px;
          color: var(--foreground);
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-sizing: border-box;
        }
        :global(.dark-theme) .root {
          background: var(--gray-6);
        }
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 50px;
          padding: 0 16px;
          background: linear-gradient(180deg, #ffd422 0%, #f2c800 100%);
          border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
        }
        .content {
          padding: 16px;
        }
        .item {
          margin-bottom: 8px;
        }
        .item h5 {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }
        .item p {
          color: var(--gray-1);
          font-size: 12px;
          font-weight: 400;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default NotesWidget;

import React from 'react';

const MapsWidget = () => {
  return (
    <div className="root widget">
      <div className="box">
        <h5 className="location-name">Apple HQ </h5>
        <p className="arrival">ETA 08:53</p>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 155px;
          height: 155px;
          color: var(--foreground);
          background: url(/assets/map-light.png) center / cover;
          border-radius: 24px;
          padding: 5px;
          box-sizing: border-box;
        }
        :global(.dark-theme) .root {
          background: url(/assets/map-dark.png) center / cover;
        }
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
          height: 45px;
          border-radius: 18px;
          padding: 0 12px;
        }
        :global(.dark-theme) .box {
          background: var(--gray-6);
        }
        .location-name {
          font-size: 14px;
          font-weight: 500;
          margin: 0 0 2px;
        }
        .arrival {
          color: var(--gray-1);
          font-size: 12px;
          font-weight: 00;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default MapsWidget;

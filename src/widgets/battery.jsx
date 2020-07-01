import React from 'react';
import IphoneIcon from '../icons/iphone';

const PERCENTAGE = 84;

const BatteryWidget = () => {
  return (
    <div className="root widget">
      <div className="circle">
        <div className="iphone-icon">
          <IphoneIcon size={20} />
        </div>
        <svg className="circle-svg" viewBox="0 0 112 112">
          <circle className="circle-bar" cx="50" cy="50" r="50"></circle>
          <circle className="circle-value" cx="50" cy="50" r="50"></circle>
        </svg>
      </div>
      <h3 className="percentage">{PERCENTAGE}%</h3>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 155px;
          height: 155px;
          background: var(--gray-6);
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
        }
        h3 {
          color: var(--foreground);
          margin: 0;
          font-weight: 400;
          font-size: 42px;
          letter-spacing: -1.5px;
        }
        .circle {
          width: 54px;
          height: 54px;
          position: relative;
        }
        .iphone-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
        .circle-svg {
          height: 100%;
          width: 100%;
          fill: none;
          transform: rotate(-90deg);
        }
        .circle circle {
          fill: none;
          stroke-width: 10;
          transform: translate(5px, 5px);
          stroke-linecap: round;
          stroke-dasharray: 320;
        }
        .circle .circle-bar {
          stroke: var(--gray-5);
          stroke-dashoffset: 0;
        }
        .circle .circle-value {
          stroke: var(--green);
          stroke-dashoffset: ${320 - 3.2 * PERCENTAGE};
        }
      `}</style>
    </div>
  );
};

export default BatteryWidget;

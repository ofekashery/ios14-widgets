import React from 'react';
import WeatherIcon from '../icons/weather';

const WeatherWidget = () => {
  return (
    <div className="root widget">
      <h4 className="city">Cupertino</h4>
      <h3 className="temperature">27°</h3>

      <div className="details">
        <WeatherIcon size={20} color="#fff" />
        <p>
          Partly Cloudy
          <br />
          H: 25° L: 21°
        </p>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          width: 155px;
          height: 155px;
          color: #fff;
          background: linear-gradient(180deg, #2d9fd0 0%, #7bcaed 100%);
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
        }
        .city {
          font-weight: 500;
          font-size: 16px;
          margin: 0;
        }
        .temperature {
          font-weight: 300;
          font-size: 42px;
          margin: 0;
          letter-spacing: -1.5px;
        }
        .details {
          margin-top: auto;
        }
        .details p {
          font-weight: 400;
          font-size: 12px;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default WeatherWidget;

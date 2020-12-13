import React from 'react';

const WeatherIcon = ({ size = 24, color = 'var(--foreground)', ...props }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.4987 5.20204C15.959 5.20204 16.3376 4.80306 16.3376 4.35294V2.84909C16.3376 2.37851 15.959 2 15.4987 2C15.0383 2 14.6598 2.37851 14.6598 2.84909V4.35294C14.6598 4.80306 15.0383 5.20204 15.4987 5.20204ZM10.5473 6.75703C10.8849 7.08439 11.4271 7.08439 11.7442 6.75703C12.0613 6.42966 12.0613 5.90791 11.7442 5.57032L10.67 4.49617C10.3529 4.1688 9.80048 4.1688 9.48334 4.49617C9.15598 4.81329 9.1662 5.35548 9.48334 5.68285L10.5473 6.75703ZM19.2531 6.76725C19.5702 7.08439 20.1227 7.08439 20.45 6.75703L21.5139 5.6931C21.8414 5.36573 21.8414 4.82353 21.5242 4.49617C21.1969 4.1688 20.665 4.17902 20.3375 4.50639L19.2531 5.57032C18.9258 5.89769 18.936 6.43989 19.2531 6.76725ZM17.7902 13.9079C18.8951 13.1202 19.5805 11.9028 19.5805 10.5115C19.5805 8.25063 17.7698 6.42966 15.5089 6.42966C14.0562 6.42966 12.7877 7.17645 12.1023 8.28132C12.4501 8.62913 12.757 9.01789 13.0127 9.50892C15.6214 9.69309 17.4936 11.4117 17.7902 13.9079ZM21.6469 11.3504H23.1508C23.6111 11.3504 24 10.9719 24 10.5115C24 10.0511 23.6111 9.66239 23.1508 9.66239H21.6469C21.1866 9.66239 20.798 10.0511 20.798 10.5115C20.798 10.9719 21.1866 11.3504 21.6469 11.3504ZM20.3272 16.5268C20.6547 16.8542 21.1866 16.8542 21.5139 16.5268C21.8414 16.2097 21.8311 15.6675 21.5139 15.3401L20.4399 14.266C20.1227 13.9488 19.5702 13.9488 19.2531 14.266C18.9258 14.5933 18.936 15.1355 19.2531 15.4629L20.3272 16.5268Z"
        fill="var(--yellow)"
      />
      <path
        d="M3.45778 18.8082H12.5422C14.8644 18.8082 16.6445 17.0179 16.6445 14.6956C16.6445 12.3325 14.803 10.5729 12.3069 10.5626C11.4168 8.89514 9.78002 7.70844 7.58055 7.70844C4.83885 7.70844 2.5473 9.78515 2.30179 12.4962C0.900251 12.9054 0 14.1125 0 15.5959C0 17.5089 1.40153 18.8082 3.45778 18.8082Z"
        fill={color}
      />
    </svg>
  );
};

export default WeatherIcon;
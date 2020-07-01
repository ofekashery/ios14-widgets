import React from 'react';

const iPhoneIcon = ({ size = 24, color = 'var(--foreground)', ...props }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="6.75"
        y="0.75"
        width="11.5"
        height="22.5"
        rx="1.75"
        fill="var(--gray-5)"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M10 1.29999C10 1.02385 10.2239 0.799988 10.5 0.799988H14.5C14.7761 0.799988 15 1.02385 15 1.29999V1.29999C15 1.85227 14.5523 2.29999 14 2.29999H11C10.4477 2.29999 10 1.85227 10 1.29999V1.29999Z"
        fill={color}
      />
      <rect x="10" y="20.4" width="5" height="0.75" rx="0.25" fill={color} />
    </svg>
  );
};

export default iPhoneIcon;

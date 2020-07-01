import React from 'react';

const ListIcon = ({ size = 24, color = 'var(--foreground)', ...props }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 12a1 1 0 011-1h15a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1zM1 12.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM6 18a1 1 0 011-1h15a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1zM1 18.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM6 6a1 1 0 011-1h15a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V6zM1 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill={color}
      />
    </svg>
  );
};

export default ListIcon;

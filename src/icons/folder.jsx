import React from 'react';

const FolderIcon = ({ size = 24, color = 'var(--foreground)', ...props }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 2C0.895431 2 0 2.89543 0 4V7V18V19C0 20.1046 0.89543 21 2 21H22C23.1046 21 24 20.1046 24 19V7C24 5.89543 23.1046 5 22 5H10.874C10.4299 3.27477 8.86384 2 7 2H2Z"
        fill={color}
      />
    </svg>
  );
};

export default FolderIcon;

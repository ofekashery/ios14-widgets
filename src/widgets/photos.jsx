import React from 'react';

// Photo by James Donovan
// https://pexels.com/@jmsdono

const PhotosWidget = () => {
  return (
    <div className="root widget">
      <h5 className="title">
        Featured
        <br />
        Photo
      </h5>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 155px;
          height: 155px;
          color: #fff;
          background: url(/assets/photo.png) center / cover;
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
        }
        .title {
          text-shadow: 0px 0px 12px #000;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default PhotosWidget;

import React from 'react';
import PodcastsIcon from '../icons/podcasts';

const PodcastsWidget = () => {
  return (
    <div className="root widget">
      <div className="header">
        <img className="podcast-logo" src="/assets/podcast-cover.png" />
        <PodcastsIcon color="#fff" />
      </div>
      <p className="playing-state">NOW PLAYING</p>
      <h5 className="episode-name">What's new and what's Next.js</h5>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          width: 155px;
          height: 155px;
          color: #fff;
          background: linear-gradient(180deg, #d772fb 0%, #822cbe 100%);
          border-radius: 24px;
          padding: 16px;
          box-sizing: border-box;
        }
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }
        .podcast-logo {
          height: 60px;
          widows: 60px;
          border-radius: 8px;
        }
        .playing-state {
          color: rgba(255, 255, 255, 0.75);
          font-size: 11px;
          font-weight: 500;
          margin: auto 0 2px;
        }
        .episode-name {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default PodcastsWidget;

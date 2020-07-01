import React from 'react';
import BatteryWidget from './widgets/battery';
import CalendarWidget from './widgets/calendar';
import NotesWidget from './widgets/notes';
import PodcastsWidget from './widgets/podcasts';
import WeatherWidget from './widgets/weather';
import RemindersWidget from './widgets/reminders';
import MapsWidget from './widgets/maps';
import PhotosWidget from './widgets/photos';

const Widgets = () => {
  return (
    <div className="row">
      {['light', 'dark'].map((theme) => (
        <div className={`screen ${theme}-theme`}>
          <div className="screen-content">
            <BatteryWidget />
            <CalendarWidget />
            <NotesWidget />
            <PodcastsWidget />
            <RemindersWidget />
            <WeatherWidget />
            <MapsWidget />
            <PhotosWidget />
          </div>
        </div>
      ))}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700&display=swap');
        body {
          font-family: 'SSF Pro Display', 'Inter', 'Arial', sans-serif;
          margin: 0;
        }
      `}</style>
      <style jsx>{`
        :global(.widget) {
          margin: 10px;
        }
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 100%;
          max-width: 840px;
        }
        @media (min-width: 840px) {
          .screen {
            width: 50% !important;
          }
        }
        .screen {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          min-height: 100vh;
          min-height: -webkit-fill-available;
        }
        .screen-content {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 420px;
        }
        .light-theme {
          background: url(/assets/wallpaper-light.jpg) center / cover;
          --foreground: #000;
          --background: #fff;
          --gray-1: #8e8d93;
          --gray-2: #aeaeb2;
          --gray-3: #c7c7cc;
          --gray-4: #d1d1d6;
          --gray-5: #e5e5ea;
          --gray-6: #f2f2f7;
          --blue: #007aff;
          --green: #34c758;
          --indigo: #5856d5;
          --orange: #ff9500;
          --pink: #ff2d55;
          --purple: #af51de;
          --red: #ff3c2f;
          --teal: #5ac8fa;
          --yellow: #ffcd00;
        }
        .dark-theme {
          background: url(/assets/wallpaper-dark.jpg) center / cover;
          --foreground: #fff;
          --background: #000;
          --gray-1: #8e8d93;
          --gray-2: #626266;
          --gray-3: #48484a;
          --gray-4: #3a3a3c;
          --gray-5: #2c2d2e;
          --gray-6: #1c1c1e;
          --blue: #0a84ff;
          --green: #30d157;
          --indigo: #5e5be6;
          --orange: #ff9e0a;
          --pink: #ff385f;
          --purple: #bf5bf2;
          --red: #ff4539;
          --teal: #64d2fe;
          --yellow: #ffd706;
        }
      `}</style>
    </div>
  );
};

export default Widgets;

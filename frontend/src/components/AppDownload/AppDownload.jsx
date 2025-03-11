import React from 'react';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For a Better Experience <br /> Download the <strong>Tomato App</strong>
      </p>

      <div className="app-download-platforms">
        {/* Google Play Store */}
        <a
          href="https://play.google.com/store/apps/details?id=com.example.delmi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="download-btn"
          />
        </a>

        {/* Apple App Store */}
        <a
          href="https://apps.apple.com/us/app/example-tomato/id000000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="download-btn"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;

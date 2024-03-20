import React from 'react';

import Package from '../../package.json';
// import Package from '../../package.json';
import bg from './assets/cover_home.webp';
import './introduction.css';

export const Introduction = () => {
  return (
    <div
      className="welcome__container"
      style={{
        background: `url(${bg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div className="welcome-text-container">
        <h2 className="welcome_title">Kubit | react-components</h2>
        <h4 className="welcome_version">v.{Package.version} | Saturn</h4>
      </div>
    </div>
  );
};

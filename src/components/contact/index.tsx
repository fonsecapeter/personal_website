import React from 'react';

import '../../assets/scss/contact.scss';

export const Contact: React.SFC = () => (
  <div>
    <h1 className="contact-title">Contact Me</h1>
    <div className="contact-info">
      <p>
        <a href="mailto:peter.nfonseca@gmail.com">peter.nfonseca@gmail.com</a>
      </p>
      <p className="contact-info-city">San Francisco, CA</p>
    </div>
  </div>
);

export default Contact; // for dynamic import

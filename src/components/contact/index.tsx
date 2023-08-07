// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import '../../assets/scss/contact.scss';

export const Contact: FunctionalComponent = () => (
  <div>
    <h1 className="page-title">Contact Me</h1>
    <div className="contact-info">
      <p>
        <a href="mailto:peter.nfonseca@gmail.com">peter.nfonseca@gmail.com</a>
      </p>
      <p className="contact-info-city">San Francisco, CA</p>
    </div>
  </div>
);

export default Contact; // for dynamic import

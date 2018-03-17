import * as React from 'react';

class Contact extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact">
          <div className="contact-info">
            <p>
              <a href="mailto:peter.nfonseca@gmail.com">peter.nfonseca@gmail.com</a>
            </p>
            <p className="contact-info-city">San Francisco, CA</p>
          </div>
          <div
            id="map"
            className="contact-map"
            style={{ overflow: 'hidden', minHeight: '360px', minWidth: '42px' }}
          />
        </div>
      </div>
    );
  }
}

export default Contact;

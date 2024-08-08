// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Profile } from './profile';
import { SEOTags } from '../common/seo';
import '../../assets/scss/about.scss';

export const About = () => (
  <div className="about">
    <SEOTags />
    <div className="about-elevator-pitch">
      <Profile />
      <p className="about-elevator-pitch-paragraph">
        I&#39;m the artist behind studio 1way, which is all about breaking out of rigid paths and finding new ones. I think art is everywhere and more accessible than people think. I love to upcycle, customize, and add magic to whatever I can get my hands on.
      </p>
      <p className="about-elevator-pitch-paragraph">
        I&#39;m also a full-stack software engineer that lives in
        San Francisco.
      </p>
    </div>
  </div>
);

export default About; // for dynamic import

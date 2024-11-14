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
        I&#39;m a full-stack software engineer with 8+ years of experience that lives in
        San Francisco and loves making art.
      </p>
      <p className="about-elevator-pitch-paragraph">
        You can find some of that here.
      </p>
    </div>
  </div>
);

export default About; // for dynamic import

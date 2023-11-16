// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { CodeListItem } from './code_list_item';
import { LANGUAGES } from '../../content/languages';
import { Profile } from './profile';
import { SEOTags } from '../common/seo';
import '../../assets/scss/about.scss';

export const About: FunctionComponent = () => (
  <div className="about">
    <SEOTags />
    <div className="about-elevator-pitch">
      <Profile />
      <p className="about-elevator-pitch-paragraph">
        I&#39;m an experienced full-stack software engineer based in
        San Francisco who loves making art.
      </p>
      <p className="about-elevator-pitch-paragraph">
        You can find some of that here.
      </p>
    </div>
    <div className="about-code-list">
      <h3 className="about-code-list-title">Languages I Work With Most</h3>
      <div>
        {LANGUAGES.map(languageItem => (
          <CodeListItem language={languageItem} key={languageItem.name} />
        ))}
      </div>
    </div>
  </div>
);

export default About; // for dynamic import

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { CodeListItem } from './code_list_item';
import { LANGUAGES } from '../../content/languages';
import { Profile } from './profile';
import '../../assets/scss/about.scss';

export const About: FunctionComponent = () => (
  <div className="about">
    <h1 className="page-title">About Me</h1>
    <div className="about-elevator-pitch">
      <h3>From Science to Tech</h3>
      <p className="about-elevator-pitch-paragraph">
        I&#39;m a researcher-turned-software-engineer based in San Francisco. I
        love all things computer science and biology, and I&#39;m always
        looking for new ways to help people through technology.
      </p>
    </div>
    <div className="about-code-list">
      <h3 className="about-code-list-title">Languages I Work With</h3>
      <div>
        {LANGUAGES.map(languageItem => (
          <CodeListItem language={languageItem} key={languageItem.name} />
        ))}
      </div>
    </div>
    <Profile />
  </div>
);

export default About; // for dynamic import

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { DIGITAL_PROJECTS } from '../../content/portfolio/digital_work';
import '../../assets/scss/portfolio.scss';

export const DigitalWork: FunctionComponent = () => (
  <div>
    <Portfolio title="Digital Work" projects={DIGITAL_PROJECTS} category="digital-work" />
  </div>
);

export default DigitalWork; // for dynamic import

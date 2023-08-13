// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { Portfolio } from '../common/portfolio/portfolio';
import { DIGITAL_PROJECTS } from '../../content/portfolio/digital_work';
import '../../assets/scss/portfolio.scss';


export const DigitalWork: FunctionalComponent = () => (
  <Portfolio title="Digital Work" projects={DIGITAL_PROJECTS} />
);

export default DigitalWork; // for dynamic import

// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { PHYSICAL_PROJECTS } from '../../content/portfolio/physical_work';
import '../../assets/scss/portfolio.scss';


export const PhysicalWork: FunctionalComponent = () => (
  <Portfolio title="Physical Work" projects={PHYSICAL_PROJECTS} category="physical-work" />
);

export default PhysicalWork; // for dynamic import

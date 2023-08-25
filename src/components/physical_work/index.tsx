// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { PHYSICAL_PROJECTS } from '../../content/portfolio/physical_work';
import '../../assets/scss/portfolio.scss';


export const PhysicalWork: FunctionComponent = () => (
  <Portfolio title="Physical Work" projects={PHYSICAL_PROJECTS} category="physical-work" />
);

export default PhysicalWork; // for dynamic import

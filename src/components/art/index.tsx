// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { ART } from '../../content/portfolio/art';
import '../../assets/scss/portfolio.scss';


export const Art: FunctionComponent = () => (
  <Portfolio title="Art" projects={ART} category="art" />
);

export default Art; // for dynamic import

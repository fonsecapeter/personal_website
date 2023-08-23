// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { PHOTOGRAPHY } from '../../content/portfolio/photography';
import '../../assets/scss/portfolio.scss';


export const Photograpgy: FunctionalComponent = () => (
  <Portfolio title="Photography" projects={PHOTOGRAPHY} category="photography" />
);

export default Photograpgy; // for dynamic import

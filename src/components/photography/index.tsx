// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { PHOTOGRAPHY } from '../../content/portfolio/photography';
import '../../assets/scss/portfolio.scss';


export const Photograpgy: FunctionComponent = () => (
  <Portfolio title="Photography" projects={PHOTOGRAPHY} category="photography" />
);

export default Photograpgy; // for dynamic import

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { CODE } from '../../content/portfolio/code';
import '../../assets/scss/portfolio.scss';

export const Code: FunctionComponent = () => (
  <div>
    <Portfolio title="Code" projects={CODE} category="code" />
  </div>
);

export default Code; // for dynamic import

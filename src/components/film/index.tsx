// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { FILM } from '../../content/portfolio/film';
import '../../assets/scss/portfolio.scss';


export const Film: FunctionComponent = () => (
  <Portfolio title="Film" projects={FILM} category="film" />
);

export default Film; // for dynamic import

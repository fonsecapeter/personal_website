// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { Portfolio } from '../common/portfolio';
import { FILM } from '../../content/portfolio/film';
import '../../assets/scss/portfolio.scss';


export const Film: FunctionalComponent = () => (
  <Portfolio title="Film" projects={FILM} category="film" />
);

export default Film; // for dynamic import

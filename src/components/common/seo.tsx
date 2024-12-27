import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/img/logo.png';

interface SEOProps {
  readonly title?: string;
  readonly description?: string;
  readonly image?: string;
}

const SEOTags = ({
  title = 'P. Fonseca',
  description = 'his personal website',
  image = logo,
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`http://www.peternfonseca.com/${image}`} />
  </Helmet>
);

export default SEOTags;

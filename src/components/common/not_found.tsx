// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { SEOTags } from './seo';

type NotFoundProps = {
  readonly msg?: string,
};

export const NotFound = ({ msg = "This page doesn't exist" }: NotFoundProps) => (
  <div>
    <SEOTags description="a bad link" />
    <h1>Not Found</h1>
    <p>{msg}</p>
  </div>
);

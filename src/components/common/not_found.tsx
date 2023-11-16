// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { SEOTags } from './seo';

interface NotFoundProps {
  msg: string
}

export const NotFound: React.FunctionComponent<NotFoundProps> = ({ msg }) => (
  <div>
    <SEOTags description="a bad link" />
    <h1>Not Found</h1>
    <p>{msg}</p>
  </div>
);

NotFound.defaultProps = {
  msg: "This page doesn't exist",
};

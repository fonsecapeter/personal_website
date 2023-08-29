// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';

interface NotFoundProps {
  msg: string
}

export const NotFound: React.FunctionalComponent<NotFoundProps> = ({ msg }) => (
  <div>
    <h1>Not Found</h1>
    <p>{msg}</p>
  </div>
);

NotFound.defaultProps = {
  msg: "This page doesn't exist",
};

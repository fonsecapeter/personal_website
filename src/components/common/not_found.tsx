// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';

interface NotFoundProps {
  msg: string
}

export const NotFound: React.FunctionComponent<NotFoundProps> = ({ msg }) => (
  <div>
    <h1>Not Found</h1>
    <p>{msg}</p>
  </div>
);

NotFound.defaultProps = {
  msg: "This page doesn't exist",
};

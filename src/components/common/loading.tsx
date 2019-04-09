import React from 'react';
// eslint-disable-next-line no-unused-vars
import { LoadingComponentProps } from 'react-loadable';

export const Loading: React.SFC<LoadingComponentProps> = ({ error, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <button onClick={retry} type="button">Retry</button>
      </div>
    );
  }
  return <div>Loading...</div>;
};

// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
// eslint-disable-next-line no-unused-vars
import { LoadingComponentProps } from 'react-loadable';

export const Loading: React.FunctionalComponent<LoadingComponentProps> = ({ error, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <span role="img" aria-label="oh no">😮</span>
        <button onClick={retry} type="button">Retry</button>
      </div>
    );
  }
  return <div>Loading...</div>;
};

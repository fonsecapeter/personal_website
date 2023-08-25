// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LoadingComponentProps } from 'react-loadable';

export const Loading: React.FunctionComponent<LoadingComponentProps> = ({ error, retry }) => {
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

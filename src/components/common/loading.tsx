import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';

class Loading extends React.Component<LoadingComponentProps> {
  render() {
    if (this.props.error) {
      return (
        <div>
          Error! <button onClick={this.props.retry}>Retry</button>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Loading;

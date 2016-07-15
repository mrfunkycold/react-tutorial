import * as React from 'react';
import ThreadNode from './threadNode.tsx';

class ThreadBody extends React.Component<{}, {}> {
  render() {
    return (
      <ThreadNode className="threadBody">
        {this.props.children}
       </ThreadNode>
    );
  }
}

export default ThreadBody;
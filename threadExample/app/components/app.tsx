import * as React from 'react';
import Thread from './thread.tsx';
import ThreadBody from './threadBody.tsx';
import ThreadNode from './threadNode.tsx';
import ThreadReply from './threadReply.tsx';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Thread>
       <ThreadNode className="threadHeader">
        Thread Header
       </ThreadNode>
       <ThreadBody>
         <ThreadNode>Hello World</ThreadNode>
         <ThreadNode>Node 2</ThreadNode>
         <ThreadNode>Node 3</ThreadNode>
         <ThreadNode>Node 4</ThreadNode>
         <ThreadReply />
       </ThreadBody>
       
      </Thread>
    );
  }
}

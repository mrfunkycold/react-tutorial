import * as React from 'react';
import ThreadHeader from './threadHeader';
import ThreadBody from './threadBody';
import ThreadNode from './threadNode';
import ThreadReply from './threadReply';

export interface ThreadProps {
  thread_id: string,
  threadNodes: any[],
  dispatch: (any) => void,
  person: string
}

class Thread extends React.Component<ThreadProps, {}> {
  renderFirst(node) {
    return <ThreadHeader person={node.person} 
                         timestamp={node.timestamp}
                         onDeleteClicked={this.onDeleteClicked(node)}
                         >{node.text}</ThreadHeader>;
  }
  onDeleteClicked(node) {
    return () => this.props.dispatch({
      thread_id: this.props.thread_id,
      post_id: node.id,
      type: 'DELETE_POST'
    });
  }
  renderRest(nodes) {
    return nodes.map(node => <ThreadNode className="threadRepliedNode" 
                                         key={node.id} 
                                         person={node.person} 
                                         timestamp={node.timestamp}
                                         onDeleteClicked={this.onDeleteClicked(node)}>
                                        {node.text}
                             </ThreadNode> );
  }
  render() {
    const {threadNodes, dispatch, person, thread_id} = this.props;
    const first = threadNodes[0];
    const rest = threadNodes.slice(1);

    return (
      <div className="thread">
        {this.renderFirst(first)}
        <ThreadBody>
          {this.renderRest(rest)}
          <ThreadReply thread_id={thread_id} dispatch={dispatch} person={person}/>
        </ThreadBody>
      </div>
    );
  }
}

export default Thread;
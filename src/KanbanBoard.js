import React, {Component} from 'react';
import List from './List.js';

class KanbanBoard extends Component {
  render() {
    return (
      <div className='app'>
        {/* do zrobienia */}
        <List
          id='todo'
          title='Do zrobienia'
          cards={this.props.cards.filter(card => card.status === 'todo')}
        />
        {/* w trakcie */}
        <List
          id='in-progress'
          title='W toku'
          cards={this.props.cards.filter(card => card.status === 'in-progress')}
        />
        {/* zrobione */}
        <List
          id='in-done'
          title='Zrobione'
          cards={this.props.cards.filter(card => card.status === 'done')}
        />
      </div>
    );
  }
}

export default KanbanBoard;

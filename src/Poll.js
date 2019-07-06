import React, { Component } from 'react';
import './Poll.css';

class Poll extends Component {
  render() {
    return (
      <div className="Poll">
        <div className="score-counter">136</div>
        <div className="poll-name">{this.props.name}</div>
      </div>
    );
  }
}

export default Poll;
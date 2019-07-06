import React, { Component } from 'react';
import Poll from './Poll.js';
import './PollList.css';

class PollList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: [
        "ЯМы на дорогах",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Нужен ли фонтан",
        "Хаты дворянам"
      ]
    }
  }

  render() {
    return (
      <div className="PollList">
        {this.state.polls.map((poll) => <Poll name={poll} />)}
      </div>
    );
  }
}

export default PollList;
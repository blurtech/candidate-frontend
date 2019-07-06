import React, { Component } from 'react';
import Description from './Description.js';
import './Poll.css';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionHidden: true
    };
  }

  toggleDescription = () => {
    this.setState({
      descriptionHidden: !this.state.descriptionHidden
    })
  }

  render() {
    return (
        <div className="Poll">
          <div className="score-counter">
            <div className="up-arrow">▲</div><br />
            136<br />
            <div className="down-arrow">▼</div>
          </div>
          <div onClick={this.toggleDescription} className="poll-name">{this.props.name}<br />
            {!this.state.descriptionHidden && <Description desc={this.props.desc} />}</div>
        </div>
    );
  }
}

export default Poll;

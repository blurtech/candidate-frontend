import React, { Component } from 'react';
import axios from 'axios';
import Poll from './Poll.js';
import './PollList.css';

class PollList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios.get('http://api.candidate.blur.tech/initiative')
      .then(response => {console.log(response.data);this.setState({data: response.data})})
      .catch(err => console.log(err))
  }

  render() {
    const { initiatives } = this.state;
    return (
      <div className="PollList">
        {initiatives.map((initiative) => <Poll name={initiative.title} desc={initiative.desc} />)}
      </div>
    );
  }
}

export default PollList;
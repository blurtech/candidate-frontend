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

  componentWillMount() {
    axios.get('http://api.candidate.blur.tech/initiative')
        .then(response => {console.log(response.data.data);
          this.setState({data: response.data.data})}
        )
        .catch(err => console.log(err))
  }
  showPolls = () => {
    if (this.state.data === null){return <div></div>}
    if (this.state.data != null){
      console.log('data here ' + this.state.data[0].title);
      return this.state.data.map((data) => (<Poll name={data.title} desc={data.describe} />))
    }
  }
  render() {
    return (
        <div className="PollList">
          {this.showPolls()}
        </div>
    );
  }
}

export default PollList;

import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <div className="Description">{this.props.desc}</div>
    );
  }
}

export default Description;
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.logo,
      title: props.title,
      description: props.description,
      example: props.example
    };
  }
  render() {
    return (
      <div className="Challenge">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <a href={this.props.example}>View Example</a>
        {Button}
      </div>
    );
  }
}

export default Challenge;

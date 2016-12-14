import React, { Component } from 'react';
import logo from '../img/prodigious.png';

class GridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.logo,
      title: props.title,
      description: props.description,
      link: props.link,
      difficulty: props.difficulty
    };
  }
  render() {
    return (
      <div className="GridCell">
        <div className="item" data-id="1">
            <div className="front">
              <img src={this.props.logo} alt="logo" />
              <h6>{this.props.title}</h6>
              <span>{this.props.difficulty}</span>
            </div>
            <div className="back">
              <p>{this.props.description}</p>
              <a href="{this.props.link}">View Detail</a>
            </div>
        </div>
      </div>
    );
  }
}

export default GridCell;

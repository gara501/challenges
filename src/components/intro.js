import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <h1>Prodigious Challenges</h1>
        <div className="about-container">
          <div className="about">
            <h3>Show us what you can do!</h3>
          </div>
          <div className="p1">
            <p>Prodigious challenges is an initiative to increase knowledge
            proposing challenges in different difficulties, trying to impulse
            curiosity and learning.</p>
          </div>
          <div className="p2">
            <p>You only need a github account to participate, and create a
            github page to show your solution.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

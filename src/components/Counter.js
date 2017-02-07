import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.props = {tally: 0};
    this.tallyUp = this.tallyUp.bind(this);
    this.tallyDown = this.tallyDown.bind(this);
    console.log('Counter this.props', this.props);
    console.log('Counter this.state', this.state);
  }

  tallyUp(e) {
    let currentTally = this.props.tally;
    let newTally = currentTally + 1;
    console.log('newTally:', newTally);
    this.props.tally = newTally;
    console.log('this.props', this.props);
  }

  tallyDown(e) {
    let currentTally = this.props.tally;
    let newTally = currentTally - 1;
    this.tally = newTally;
    console.log('this.props', this.props);
  }

  render() {
    return (
      <div className="counter">
        <div className="tally">{ this.props.tally }</div>
        <button className="plus" onClick={this.tallyUp}>+</button>
        <button className="minus" onClick={this.tallyDown}>-</button>
      </div>
    );
  }
}

export default Counter;

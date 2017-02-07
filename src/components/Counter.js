import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      counter: {
        value: 0
      }
    }
  }

  increment() {
    const nextState = { ...this.state };
    nextState.counter.value = this.state.counter.value + 1;
    this.setState(nextState);
  }

  decrement() {
    const nextState = { ...this.state };
    nextState.counter.value = this.state.counter.value - 1;
    this.setState(nextState);
  }

  render() {
    return (
      <div className="counter">
        <div className="tally">{this.state.counter.value}</div>
        <button className="plus fa fa-plus" onClick={this.increment}></button>
        <button className="minus fa fa-minus" onClick={this.decrement}></button>
      </div>
    );
  }
}

export default Counter;

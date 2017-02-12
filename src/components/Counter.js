import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.increment = this.increment.bind(this);
  //   this.decrement = this.decrement.bind(this);
  //   this.state = {
  //     counter: {
  //       value: 0
  //     }
  //   }
  // }

  render() {
    return (
      <div className="counter">
        <div className="tally">{this.props.value}</div>
        <button className="plus fa fa-plus" onClick={this.props.increment}></button>
        <button className="minus fa fa-minus" onClick={this.props.decrement}></button>
        <input className="remove-checkbox" type="checkbox" />
      </div>
    );
  }
}

export default Counter;

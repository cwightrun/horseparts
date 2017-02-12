import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: this.props.value }
  }

  handleChange(dir) {
    const counter = this.state;
    if (dir == 'up') {
      counter.value++;
    } else {
      counter.value--;
    }
    let newVal = counter.value;
    this.setState({ newVal });
  }

  render() {
    return (
      <div className={`counter ${this.state.rotate ? 'rotated' : 'nope'}`}>
        <div className="tally">{this.state.value}</div>
        <button className="plus fa fa-plus" onClick={() => this.handleChange('up')}></button>
        <button className="minus fa fa-minus" onClick={() => this.handleChange('down')}></button>
        <input className="remove-checkbox fa fa-rotate-right" type="checkbox" />
      </div>
    );
  }
}

export default Counter;

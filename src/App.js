import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addCounter = this.addCounter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.state = {counters: [{ key: 0, value: 0 }]};
  }

  addCounter(value) {
    const counters = this.state.counters; // is an array
    let key = counters.length;
    let counter = { key: key, value: value }        // Data for the new counter
    counters.push(counter);               // add the new counter to the Counters array
    this.setState({ counters }); // set state of Counters to be the updated / new Counters
  }

  removeCounter() {
    const counters = this.state.counters;
    counters.pop();
    this.setState({ counters });
  }

  addValue(amount) {
    const counters = this.state.counters;
    counters.map((counter) => counter.value = 40);
    this.setState({ counters });
  }

  handleChange(key, dir) {
    const counters = this.state.counters;
    const counter = counters[key];
    if (dir == 'up') {
      counter.value++;
    } else {
      counter.value--;
    }
    this.setState({ counters });
  }

  decrement() {
    const nextState = { ...this.state };
    nextState.counter.value = this.state.counter.value - 1;
    this.setState(nextState);
  }

  componentWillMount() {
    // this.addCounter();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HORSE.PARTS</h2>
        </div>
        <div className="config">
          <button onClick={() => this.addCounter(0)}>Add</button>
          <button onClick={() => this.removeCounter()}>Remove</button>
          <button onClick={() => this.addValue(40)}>EDH</button>
        </div>
        <div className="counters">
          {this.state.counters.map(
            (counter) => // For each of the items in this "counters" array,
            <Counter
              key={counter.key}
              value={counter.value}
              increment={() => this.handleChange(counter.key, 'up')}
              decrement={() => this.handleChange(counter.key, 'down')}
            />)
          }
        </div>
      </div>
    );
  }
}

export default App;

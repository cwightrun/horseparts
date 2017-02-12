import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addCounter = this.addCounter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.decrement = this.decrement.bind(this);
    this.state = {
      counters: [
        { key: 0, value: 34 },
        { key: 1, value: 45 },
        { key: 2, value: 56 },
      ]
    };
  }

  addCounter(value) {
    let counter = { value: value }        // Data for the new counter
    const counters = this.state.counters; // is an array
    counters.push(counter);               // add the new counter to the Counters array
    this.setState({ counters }); // set state of Counters to be the updated / new Counters
    // const nextState = { counters: [{...counters}, {counter}]};
    //   console.log('nextState', nextState);
    //   console.log('state', this.state);
    // this.setState({ nextState }); // set state
    // console.log('addCounter nextState', nextState);
  }

  addValue(amount) {
    const counters = this.state.counters;
    counters.map((counter) => counter.value = 40);
    this.setState({ counters });
  }

  handleChange(key, dir) {
    console.log('key', key);
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
          <button onClick={() => this.addCounter(22)}>Add Counter</button>
          <button onClick={() => this.addValue(40)}>EDH</button>
        </div>
        <div className="counters">
          {this.state.counters.map(
            (counter) => // For each of the items in this "counters" array,
            <Counter
              key={counter.key}
              value={counter.value}
              increment={() => this.handleChange(counter.key, 'up')}
              decrement={() => this.handleChange(counter.key, 'down')} />)
          }
        </div>
      </div>
    );
  }
}

export default App;

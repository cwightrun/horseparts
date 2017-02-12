import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.rotate = this.rotate.bind(this);
    this.state = {
      counters: [ { value: 0 } ]
    };
  }

  addCounter(value) {
    const counters = this.state.counters;           // is an array
    let key = counters.length;
    let counter = { key: key, value: value }        // Data for the new counter
    counters.push(counter);                         // add the new counter to the Counters array
    this.setState({ counters });                    // set state of Counters to be the updated / new Counters
  }

  removeCounter() {
    const counters = this.state.counters;
    counters.pop();
    this.setState({ counters });
  }

  addValue(amount) {
    const counters = this.state.counters;
    console.log('counters', counters);
    // console.log('amount', amount);
    // counters.map((counter) => counter.value = 40);
    // this.setState({ counters });
  }

  rotate(key) {
    const counter = this.state.counters[key];
    counter.rotate = !counter.rotate;
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
              className={`counter ${counter.rotate}`}
              key={counter.key}
              value={counter.value}
            />)
          }
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addCounter = this.addCounter.bind(this);
    this.state = {
      counters: {}
    };
  }

  addCounter(counter, value) {
    const nextState = this.state.counters;
    const timestamp = Date.now();
    nextState[`counter-${timestamp}`] = counter;
    this.setState({ nextState }); // set state
  }

  addValue(amount) {
  }

  componentWillMount() {
    this.addCounter({value: 0});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HORSE.PARTS</h2>
        </div>
        <div className="config">
          <button onClick={this.addCounter}>Add Counter</button>
          <button onClick={this.addValue(40)}>Add Value</button>
        </div>
        <div className="counters">
          {
            Object.keys(this.state.counters)
              .map(key => <Counter key={key} index={key} value="0" increment={this.increment} decrement={this.decrement} />)
          }
        </div>
      </div>
    );
  }
}

export default App;

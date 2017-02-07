import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    // this.tallyUp = this.tallyUp.bind(this);
    // this.tallyDown = this.tallyDown.bind(this);
    this.setEDH = this.setEDH.bind(this);
    console.log("App constructor:", this.state);
    this.state = {tally: 0};
  }

  setEDH() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HORSE.PARTS</h2>
        </div>
        <div className="config">
          <button onClick={this.setEDH}>EDH!</button>
        </div>
        <div className="counters">
          <Counter id="counter1" tallyUp={this.props.tallyUp} tallyDown={this.props.tallyDown} tally={this.state.tally} />
          <Counter id="counter2" tallyUp={this.props.tallyUp} tallyDown={this.props.tallyDown} tally={this.state.tally} />
          <Counter id="counter3" tallyUp={this.props.tallyUp} tallyDown={this.props.tallyDown} tally={this.state.tally} />
          <Counter id="counter4" tallyUp={this.props.tallyUp} tallyDown={this.props.tallyDown} tally={this.state.tally} />
        </div>
      </div>
    );
  }
}

export default App;

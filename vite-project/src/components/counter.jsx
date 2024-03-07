import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
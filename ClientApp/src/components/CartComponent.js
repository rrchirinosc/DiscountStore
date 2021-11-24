import React, { Component } from 'react';

export class Cart extends Component {
  static displayName = Cart.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
      </div>
    );
  }
}

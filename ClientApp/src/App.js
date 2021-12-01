import React, { Component } from 'react';
import Main from './components/MainComponent';
import './shared/custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Main />
    );
  }
}

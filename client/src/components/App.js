import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import '../styles/App.css';

import Profile from './Profile'
import Repos from './Repos'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="container">
          <Profile />
          <Repos />
        </div>
      </Provider>
    );
  }
}

export default App;

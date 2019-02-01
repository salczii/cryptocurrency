import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import AppLayout from './AppLayout';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar></AppBar>
      </AppLayout>
    );
  }
}

export default App;

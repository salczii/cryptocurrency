import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const MyButton = styled.div`
color: green;
`

class App extends Component {
  render() {
    return (
      <div>
        <MyButton></MyButton>
      </div>
    );
  }
}

export default App;

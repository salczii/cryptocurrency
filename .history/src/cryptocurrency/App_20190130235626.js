import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import AppLayout from './AppLayout';

const MyButton = styled.button`
color: green;
${({ primary }) => primary && css`
color: palevioletred;
border: 2px solid black;
border-radius: 5px;
`}
`

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

import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

const MyButton = styled.button`
font-family: inherit;
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
      <div>
        <p>Hello</p>
        <button>Hello</button>
        <MyButton></MyButton>
      </div>
    );
  }
}

export default App;

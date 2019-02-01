import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

const MyButton = styled.div`
color: green;
${({ primary }) => primary && css`
color: palevioletred;
`}
`

class App extends Component {
  render() {
    return (
      <div>
        <MyButton>Hello</MyButton>
      </div>
    );
  }
}

export default App;

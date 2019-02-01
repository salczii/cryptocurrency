import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const MyButton = styled.div`
color: green;
${({ primary }) => primary && css`
color: palevioletred;
`}
`_;

class App extends Component {
  render() {
    return (
      <div>
        <MyButton primary>Hello</MyButton>
      </div>
    );
  }
}

export default App;

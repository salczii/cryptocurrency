import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
font-size: 1.5em;
`

const Bar = styled.div`
display:grid;
grid-template-columns: 180px auto 100px 100px;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${({ active }) => active & css`
    color: blue;
    `}
`

function ControlButton({ name }) {
    return (
        <ControlButtonElem>
            {name}
        </ControlButtonElem>
    )
}

const AppBar = () => {
    return (
        <Bar>
            <Logo>Cryptodach</Logo>
            <div></div>
            <ControlButton>Dashboard</ControlButton>
            <ControlButton>Settings</ControlButton>
        </Bar>
    )
}

export default AppBar
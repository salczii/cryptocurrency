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
    color:blue
    `}
`

function ControlButton({ name }) {
    return
}

const AppBar = () => {
    return (
        <Bar>
            <div>Cryptodach</div>
            <div></div>
            <div>Dashboard</div>
            <div>Settings</div>
        </Bar>
    )
}

export default AppBar
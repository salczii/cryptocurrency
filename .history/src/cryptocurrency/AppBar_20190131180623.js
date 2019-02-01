import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
font-size: 1.5em;
`

const Bar = styled.div`
display:grid;
grid-template-columns: 180px auto 100px 100px;
`

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
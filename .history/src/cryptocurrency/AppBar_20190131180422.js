import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
display:grid;
grid-template-columns: 100px 100px 100px;
`

const AppBar = () => {
    return (
        <Bar>
            <div>Cryptodach</div>
            <div>Dashboard</div>
            <div>Settings</div>
        </Bar>
    )
}

export default AppBar
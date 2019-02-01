import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
display:grid;
grid-template-columns: 100px 100px 100px
`

const AppBar = () => {
    return (
        <Bar>
            <div>child1</div>
            <p>sas</p>
            <div>child1</div>
            <div>child1</div>
        </Bar>
    )
}

export default AppBar
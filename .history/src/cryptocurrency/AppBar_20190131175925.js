import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
display:grid;
`

const AppBar = () => {
    return (
        <Bar>
            <div>child1</div>
            <div>child1</div>
            <div>child1</div>
        </Bar>
    )
}

export default AppBar
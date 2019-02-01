import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        page: 'dashboard'
    }

    setPage = page => {
        this.setState({
            page,
        })
    }

    render() {
        return
    }
}
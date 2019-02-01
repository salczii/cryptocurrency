import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    state = {
        page: 'dashboard'
    }

    setPage = this.page => {
        this.setState({
            page,
        })
    }

    render() {
        return
    }
}
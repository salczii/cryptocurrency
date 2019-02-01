import React from 'react';

export class AppProvider extends React.Component {
    state = {
        page: 'dashboard'
    }

    setPage = page => {
        this.setState({
            page
        })
    }

    render() {
        return
    }
}
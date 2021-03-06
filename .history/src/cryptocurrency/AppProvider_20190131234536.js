import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'settings'
        }
    }
    setPage = page => this.setState({
        page
    })


    render() {
        return (
            <AppContext.Provider value={this.state.page}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
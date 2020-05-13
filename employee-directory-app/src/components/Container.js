import React from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList'
import getUsers from './utils/API';

class Container extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        getUsers().then((res) => {
            this.setState({people: res.data.results})
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <EmployeeList people={this.state.people}/>
            </div>
        )
    }
}

export default Container; 
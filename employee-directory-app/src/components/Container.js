import React from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList'
import getUsers from './utils/API';

class Container extends React.Component {
    state = {
        people: [],
        filteredPeople: []
    }

    componentDidMount() {
        getUsers().then((res) => {
            this.setState({people: res.data.results, filteredPeople: res.data.results})
        })
    }

    searchPhone = (num) => {
        const filteredEmployees = this.state.people.filter((person) => {
            if(person.cell.includes(num)) {
                return person
            }
        });
        this.setState({filteredPeople: filteredEmployees});
    }

    render() {
        return (
            <div>
                <Header search={this.searchPhone} />
                <EmployeeList people={this.state.filteredPeople}/>
            </div>
        )
    }
}

export default Container;
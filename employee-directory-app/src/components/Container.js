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
            this.setState({ people: res.data.results, filteredPeople: res.data.results })
        })
    }

    search = (term) => {
        const filteredEmployees = this.state.people.filter((person) => {
            if (person.cell.includes(term) || (person.name.first + " " + person.name.last).includes(term) || person.email.includes(term)) {
                return person
            }
        });
        this.setState({ filteredPeople: filteredEmployees });
    }

    render() {
        return (
            <div>
                <Header search={this.search} />
                <EmployeeList people={this.state.filteredPeople} />
            </div>
        )
    }
}

export default Container;
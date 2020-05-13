import React, {Component} from 'react';
import '../App.css';

class EmployeeList extends Component {
    render() {
        console.log(this.props.people)
        return (
            <ul>
                {this.props.people.map((person) => {
                    return (
                        <li>
                            {person.name.first}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default EmployeeList;

// {people.data.results.map((person) => {
//     return <li>{person.name.last}</li>
// })} 
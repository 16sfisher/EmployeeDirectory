import React, {Component} from 'react';
import '../App.css';

class EmployeeList extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>

                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Cell
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.props.people.map((person, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                <img src={person.picture.thumbnail} alt='Thumbnail image'/>
                            </td>
                            <td>
                                {person.name.first + " " + person.name.last}
                            </td>
                            <td>
                                {person.email}
                            </td>
                            <td>
                                {person.cell}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

export default EmployeeList;
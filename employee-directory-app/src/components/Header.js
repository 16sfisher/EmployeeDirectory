import React from 'react';
import '../App.css';

function Header(props) {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">React Employee Directory</h1>
                    <p className="lead">Easily see and search for employees</p>
                </div>
                <br />
            </div>

            <form>
                <div className="form-group">
                    <label>Search by Phone #</label>
                    <input className="form-control" id="exampleFormControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
            </form>
        </div>
    )
}

export default Header;
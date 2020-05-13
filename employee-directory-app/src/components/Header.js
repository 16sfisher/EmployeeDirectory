import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">React Employee Directory</h1>
                <p className="lead">Easily see and sort employees by different fields.</p>
            </div>
        </div>
    )
}

export default Header;
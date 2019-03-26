import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

class DashboardNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                    <img src="assets/img/cow.png" width="25" height="25" className="d-inline-block align-top" alt="" />
                    <strong>Ternakku</strong></Link>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/">Sign out</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default DashboardNavBar;
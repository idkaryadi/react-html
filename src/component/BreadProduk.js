import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Redirect } from "react-router-dom"
// import { withRouter } from "react-router-dom";


class Bread extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Product</li>
                    <li className="ml-auto">
                        <Link to="/kandang">
                            <span className="fas fa-shopping-cart"></span>
                            <strong>Kandangku</strong>
                        </Link>
                    </li>
                </ol>
            </nav>
        );
    }
}

export default Bread;
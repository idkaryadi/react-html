import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Redirect } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";


class ValueKategori extends Component {

    render() {
        return (
            <option value={this.props.id}>{this.props.nama}</option>
        );
    }
}

// export default Kategori;
export default connect(
    '', actions
)(withRouter(ValueKategori))
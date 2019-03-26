import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class History extends Component {
    render() {
        return (
            <tr>
                <td>#</td>
                <td>---</td>
                <td>{this.props.total_qty}</td>
                <td>Rp {this.props.total_price},00</td>
                <td>{this.props.status_pembayaran}</td>
            </tr>
        );
    }
}

// export default TableProductList;
export default connect(
    '', actions
)(withRouter(History))
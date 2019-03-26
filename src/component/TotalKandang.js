import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class TotalKandang extends Component {
    componentDidMount = () => {
        this.props.getLastTransaksi()
    }
    render() {
        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><strong>Total</strong></td>
                <td>Rp {this.props.total_price},00</td>
                <td>{this.props.total_qty}</td>
                <td>{this.props.status_pembayaran}</td>
            </tr>
        );
    }
}

// export default IsiKandang;
export default connect(
    'total_price, total_qty, status_pembayaran', actions
)(withRouter(TotalKandang))
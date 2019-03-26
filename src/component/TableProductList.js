import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class TableProductList extends Component {
    doRedirectEdit = () => {
        this.props.setEditedId(this.props.product_id)
        this.props.history.replace("/editproduct")

    }
    doDelClientProduk = () => {
        this.props.delClientProduk(this.props.product_id).then(() => {
            this.props.history.replace('/dashboard')
            console.log("PINDAH COY")
        })};

    render() {
        return (
            <tr>
                <td>{this.props.product_id}</td>
                <td>{this.props.nama}</td>
                <td>{this.props.kategori_produk}</td>
                <td>Rp {this.props.price},00</td>
                <td>Ada</td>
                <td>{this.props.qty}</td>
                <td>
                    <button type="button" className="btn btn-outline-warning btn-sm"
                        onClick={() => this.doRedirectEdit()}>Ubah</button>
                </td>
                <td><button type="button" className="btn btn-outline-dark btn-sm"
                    onClick={() => this.doDelClientProduk()}>Hapus</button></td>
            </tr>
        );
    }
}

// export default TableProductList;
export default connect(
    '', actions
)(withRouter(TableProductList))
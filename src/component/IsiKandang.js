import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class IsiKandang extends Component {
    doDelKandang = () => {
        this.props.delKandang(this.props.id).then(() => {
            this.props.history.replace('/dashboard')
            console.log("PINDAH COY")
        })};
    doPutKandang = () => {
        this.props.putKandang(this.props.id).then(() => {
            this.props.history.replace('/dashboard')
            console.log("PINDAH COY")
        })};

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.nama_produk}</td>
                <td>
                    <img src={this.props.url_gambar} className="img-kandangku" />
                </td>
                <td>{this.props.kategori_produk}</td>
                <td>Rp {this.props.price}</td>
                <td>
                    <select className="form-control" name="qty" onChange={() => this.doPutKandang()}>
                    {/* <option name="qty" onClick={e =>this.props.setQty(e)}>{this.props.qty - 2 }</option> */}
                    <option onClick={e => this.props.setQty(e)}>{this.props.qty - 1}</option>
                    <option selected>{this.props.qty}</option>
                    <option onClick={e => this.props.setQty(e)}>{this.props.qty + 1}</option>
                    </select>
                </td>
                <td><button type="button" className="btn btn-outline-dark btn-sm" 
                    onClick={() => this.doDelKandang()}>Hapus</button></td>
            </tr>
        );
    }
}

// export default IsiKandang;
export default connect(
    '', actions
)(withRouter(IsiKandang))
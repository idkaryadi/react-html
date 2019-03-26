import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
// import { withRouter } from "react-router-dom";

class Produk extends Component {
    doGetProdukId = (e) => {
        this.props.getProdukId(this.props.id).then(() => {
                // this.props.username, this.props.password
                this.props.history.replace('/detail')
                console.log("PINDAH COY", this.props.id)
            })};
    render() {
        return (
            <div className="col-md-4 col-6">
                <div className="listproduk" onClick={(e) => this.doGetProdukId(e)}>
                    <div className="box-animal shadow-box">
                        <img className="img-animal" src={this.props.gambar} />
                        <span className="p-3 muncul"><strong>{this.props.nama}</strong></span>
                        <span className="p-3 hide"><strong>{this.props.nama.slice(0,15)}</strong></span>
                        <br/>

                        <span className="p-3 muncul">Rp {this.props.harga},00 / {this.props.satuan}</span>
                        <span className="p-3 hide">Rp {this.props.harga}</span>
                        <br/>
                        <span className="p-3 muncul">{this.props.lokasi}</span><br/>
                    </div>
                </div>
            </div>
        );
    }
}
                
// export default Produk;
    export default connect(
    '', actions
)(withRouter(Produk))
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import IsiKandang from "./../component/IsiKandang"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter, Redirect } from "react-router-dom";
import TotalKandang from '../component/TotalKandang';

class Kandang extends Component {
    componentDidMount = () => {
        this.props.getKandang();
        console.log("HERE at Kandang")
    }
    
    doPostTransaksi = () => {
        this.props.postTransaksi(this.props.transaction_id);
        this.props.history.replace('/dashboard')
        console.log("HERE at Kandang")
    }

    render() {
        if(!this.props.islogin){
            return <Redirect to={{ pathname: "/login"}}/>;
        } else if (this.props.status ==='client'){
            return <Redirect to={{pathname:"/dashboard"}}/>
        } else  {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item muncul"><Link to="/produk">Product</Link></li>
                        <li className="breadcrumb-item hide"><Link to="/produk">...</Link></li>
                        <li className="breadcrumb-item"><Link to="/detail">Detail</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Kandang</li>
                        <li className="ml-auto">
                            <Link to="/kandang">
                                <span className="fas fa-shopping-cart"></span>
                                <strong>Kandangku</strong>
                            </Link>
                        </li>
                    </ol>
                </nav>
                <div className="container-fluid after-breadcrumb">
                    <h3>Kandangku</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama</th>
                                    <th>Gambar</th>
                                    <th>Kategori</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.listKandang.map((item, key) => {
                                    const src_img = item.tambahan.url_gambar === "" ? this.props.not_found : item.tambahan.url_gambar;
                                    return <IsiKandang key={item.ori.key} product_id={item.ori.product_id} 
                                    qty={item.ori.qty} price={item.ori.price} id={item.ori.id}
                                    nama_produk = {item.tambahan.nama_produk} url_gambar = {src_img}
                                    kategori_produk = {item.tambahan.kategori_produk}
                                    />;
                                })}
                            </tbody>
                                <TotalKandang/>
                        </table>
                        <button type="button" className="btn btn-warning ml-auto" onClick={() => this.doPostTransaksi()}><strong>Bayar</strong></button>
                        <button type="button" style={{ marginLeft: "30px" }} className="btn btn-outline-dark"><strong>Batalkan</strong></button>
                    </div>
                </div>
            </div>
        );
    }
}}

// export default Kandang;
export default connect(
    'listKandang, token, islogin, status, not_found, transaction_id', actions
)(withRouter(Kandang))
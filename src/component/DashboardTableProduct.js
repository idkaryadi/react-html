import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import TableProductList from "./TableProductList"
import { Link, withRouter } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import IsiKandang from './../component/IsiKandang'
import TotalKandang from './TotalKandang';

class DashboardTableProduct extends Component {
    componentDidMount = () => {
        this.props.getUser()
        if (this.props.status === 'user'){
            this.props.getKandang();
        } else {
            this.props.getClientProduk();
        }
        // this.props.getMovies()
        // this.props.getKategori();
        
        // this.props.getClientProduk();
    }
    doPostTransaksi = () => {
        this.props.postTransaksi(this.props.transaction_id);
        this.props.history.replace('/dashboard')
        console.log("HERE at Kandang")
    }
    render() {
        if (this.props.status === "client"){
        return (
            <div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h4 className="h2">Selamat datang {this.props.username} :)</h4>
                    </div>

                    <h2>Your Products</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama</th>
                                    <th>Kategori</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Qty</th>
                                    <th>Ubah</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.listClientProduk.map((item, key) => {
                                    return <TableProductList key={item.key} product_id={item.ori.id} nama={item.ori.nama}
                                    kategori={item.ori.product_type_id} qty={item.ori.qty} price={item.ori.price} 
                                    kategori_produk={item.tambahan.kategori_produk}/>;
                                })}
                                {/* <TableProductList/> */}
                            </tbody>
                        </table>
                    </div>
            </div>

        );
    }
    else {
        return (
            <div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h4 className="h2">Selamat datang {this.props.username} :)</h4>
                    </div>

                    <h2>Your Last Transaction</h2>
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
                                    qty={item.ori.qty} price={item.ori.price} id={item.ori.id} transaction_id={item.ori.transaction_id}
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

        );
    }}
}

// export default DashboardTableProduct;
export default connect(
    'username, status, listClientProduk, listKandang, transaction_id', actions
)(withRouter(DashboardTableProduct))
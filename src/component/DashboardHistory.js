import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";
import History from "./../component/History"

class DashboardHistory extends Component {
    componentDidMount = () =>{
        this.props.getTransaksi();
    }
    render() {
        return (
            <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h2>Riwayat Transaksi</h2>
            </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Waktu</th>
                                    <th>Jumlah Barang</th>
                                    <th>Total Harga</th>
                                    <th>Status Pembayaran</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.listTransaksi.map((item, key) => {
                                    return <History key={item.key} total_qty={item.total_qty}
                                    total_price={item.total_price} status_pembayaran={item.status_pembayaran} />;
                                })}
                                {/* <TableProductList/> */}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
}}

// export default DashboardAddProduk;
export default connect(
    'listTransaksi', actions
)(withRouter(DashboardHistory))

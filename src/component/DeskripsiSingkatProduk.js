import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class DeskripsiSingkatProduk extends Component {
    doPostKandang = () => {
        this.props.setProductId(this.props.product_id)
        this.props.postKandang().then(() => {
            // this.props.username, this.props.password
            console.log("PINDAH COY", this.props.id)
            // const int = Number(this.props.id)
            // this.props.setProductId(this.props.id)
            this.props.history.replace('/kandang')
            })};

    render() {
        return (
            <div class="box-product-2 shadow-box">
                <div class="img-product-detail">
                    <span><h3> <strong>{this.props.nama_produk}</strong> </h3></span>
                    <span><h4>Rp {this.props.harga_produk},00 / {this.props.satuan_produk}</h4></span>
                    <span>Lokasi : <strong>{this.props.lokasi}</strong></span><br />
                    <span>Deskripsi : <br />
                    {this.props.deskripsi_produk}
                    </span>
                </div>
                <div class="img-product-detail-1">
                <span>Tersedia : {this.props.produk_qty} item</span><br />
                    <form onSubmit={e => e.preventDefault()}> Aku beli:
                        <input list="jumlah" name="qty" placeholder="berapa ya?" onChange={e => this.props.setField(e)}/>
                        <datalist id="jumlah">
                            <option value="1" />
                            <option value="2" />
                            <option value="3" />
                        </datalist>
                    </form>
                </div>
                <div class="img-product-detail-1">
                    <button type="button" class="btn btn-warning muncul">Hubungi Pedagang</button>
                    <button type="button" class="btn btn-warning muncul" onClick={() => this.doPostKandang()}>Masukan Keranjang</button>
                    <button type="button" class="btn btn-warning hide">Contact</button>
                    <button type="button" class="btn btn-warning hide" onClick={() => this.doPostKandang()}>Add Chart</button>
                </div>
            </div>
        );
    }
}

// export default DeskripsiSingkatProduk;
export default connect(
    'nama_produk, harga_produk, satuan_produk, deskripsi_produk, lokasi, produk_qty, product_id', actions
)(withRouter(DeskripsiSingkatProduk))
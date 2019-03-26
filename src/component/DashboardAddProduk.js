import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";
import ValueKategori from './ValueKategori';

class DashboardAddProduk extends Component {
    componentDidMount = () => {
        // this.props.getMovies()
        this.props.getKategori();
        // this.props.getProduk();
    }

    doPostClientProduk = () => {
        this.props.postClientProduk().then(() => {
                // this.props.username, this.props.password
                this.props.history.replace('/dashboard')
                console.log("PINDAH COY")
            })};

    render() {
        return (
            <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h4 className="h2">Tambah produkmu, tambah untungmu :)</h4>
            </div>

            <div className="">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group row">
                        <label for="nama" className="col-sm-3 col-form-label">Nama Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="nama" name="nama_produk"
                                placeholder="Nama Produk" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="deskripsi_produk" className="col-sm-3 col-form-label">Deskripsi Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="deskripsi_produk" name="deskripsi_produk"
                                placeholder="Deskripsi Produk" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="product_type_id" className="col-sm-3 col-form-label">Kategori</label>
                        <div className="col-sm-4">
                            <input list="product_type" className="form-control" id="product_type_id"
                                name="product_type_id" placeholder="Kategori" onChange={e => this.props.setField(e)}/>
                            <datalist id="product_type">
                                {this.props.listKategori.map((item, key) => {
                                return <ValueKategori key={key} nama={item.nama} id={item.id}/>;
                                })}
                            </datalist>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="price" className="col-sm-3 col-form-label">Harga Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="price" placeholder="Harga Produk"
                                name="harga_produk" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="satuan_produk" className="col-sm-3 col-form-label">Satuan Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="satuan_produk" placeholder="Satuan Produk"
                                name="satuan_produk" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="status-menu" className="col-sm-3 col-form-label">Status Produk</label>
                        <div className="col-sm-4">
                            <input list="statusmenu" className="form-control" id="status-menu" placeholder="Status Produk"
                                name="status_produk" onChange={e => this.props.setField(e)}/>
                            <datalist id="statusmenu">
                                <option value="Show" />
                                <option value="Not Show" />
                            </datalist>
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <label for="url_picture" className="col-sm-3 col-form-label">Gambar Produk</label>
                        <div className="col-md-4">
                            <input type="file" className="form-control-file" id="url_picture" />
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label for="url_picture" className="col-sm-3 col-form-label">Gambar Produk</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="url_picture" placeholder="URL Gambar Produk"
                                name="url_picture" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="qty" className="col-sm-3 col-form-label">Jumlah Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="qty" placeholder="Jumlah Produk"
                            name="qty" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <input type="submit" id="middle-submit" className="btn btn-warning" value="Simpan"
                            onClick={() => this.doPostClientProduk()} />
                    </div>

                </form>
            </div>
        </div>

        );
}}

// export default DashboardAddProduk;
export default connect(
    'listKategori', actions
)(withRouter(DashboardAddProduk))
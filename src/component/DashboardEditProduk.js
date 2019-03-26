import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";
import ValueKategori from './ValueKategori';

class DashboardEditProduk extends Component {
    componentDidMount = () => {
        // this.props.getMovies()
        this.props.getProdukId(this.props.editedId)
        this.props.getKategori();
        // this.props.getProduk();
    }
    doPutClientProduk = () =>{
        this.props.putClientProduk(this.props.editedId);
        this.props.history.replace('/dashboard')
    }
    render() {
        return (
            <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h4 className="h2">Yuk perbarui informasi produkmu :)</h4>
            </div>

            <div className="">
            <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group row">
                        <label for="id" className="col-sm-3 col-form-label">ID</label>
                        <div className="col-sm-4">
                            <input type="text" readonly className="form-control-plaintext" id="id" value={"#"+this.props.editedId} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="nama" className="col-sm-3 col-form-label">Nama Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="nama" name="nama_produk"
                                placeholder={this.props.nama_produk} onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="deskripsi_produk" className="col-sm-3 col-form-label">Deskripsi Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="deskripsi_produk" name="deskripsi_produk"
                                placeholder={this.props.deskripsi_produk} onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="product_type_id" className="col-sm-3 col-form-label">Kategori</label>
                        {/* <div className="col-sm-4">
                            <input list="product_type" className="form-control" id="product_type_id"
                                name="product_type_id" placeholder={this.props.product_type_id} onChange={e => this.props.setField(e)}/>
                            <datalist id="product_type">
                                {this.props.listKategori.map((item, key) => {
                                return <ValueKategori key={key} nama={item.nama} id={item.id}/>;
                                })}
                            </datalist>
                        </div> */}
                        <div className="col-sm-4">
                            <select list="product_type" className="custom-select my-1 mr-sm-2" id="product_type_id"
                                name="product_type_id" placeholder="" onChange={e => this.props.setField(e)}>
                                <option selected>{this.props.product_type_id}</option>
                                {this.props.listKategori.map((item, key) => {
                                return <ValueKategori key={key} nama={item.nama} id={item.id}/>;
                                })}
                            </select>
                        </div>

                    </div>
                    <div className="form-group row">
                        <label for="price" className="col-sm-3 col-form-label">Harga Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="price" placeholder={this.props.harga_produk}
                                name="harga_produk" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="satuan_produk" className="col-sm-3 col-form-label">Satuan Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="satuan_produk" placeholder={this.props.satuan_produk}
                                name="satuan_produk" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="status-menu" className="col-sm-3 col-form-label">Status Produk</label>
                        <div className="col-sm-4">
                            <input list="statusmenu" className="form-control" id="status-menu" placeholder={this.props.status_produk}
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
                            <input type="text" className="form-control" id="url_picture" placeholder={this.props.gambar}
                                name="url_picture" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="qty" className="col-sm-3 col-form-label">Jumlah Produk</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="qty" placeholder={this.props.qty}
                            name="qty" onChange={e => this.props.setField(e)}/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <input type="submit" id="middle-submit" className="btn btn-warning" value="Simpan"
                            onClick={() => this.doPutClientProduk()} />
                    </div>

                </form>
            </div>
        </div>
        );
    }
}

// export default DashboardEditProduk;
export default connect(
    'editedId, listKategori, nama_produk, product_type_id, harga_produk, satuan_produk, deskripsi_produk, lokasi, qty, product_id, gambar', actions
)(withRouter(DashboardEditProduk))
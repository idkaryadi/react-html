import React, { Component } from 'react';
import Produk from "./../component/Produk"
import Bread from "./../component/BreadProduk"
import { Link } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class ListProduk extends Component {
    componentDidMount = () => {
        // this.props.getMovies()
        // this.props.getProduk();
    }
    render() {
        if (!this.props.isSearch){
            return (
                <div>
                    <Bread/>
                    <div class="container-fluid after-breadcrumb">
                    <div class="row text-main"> <strong>Kategori {this.props.kat_id} </strong> </div>
                        <div className="row">
                            {this.props.listProdukByType.map((item, key) => {
                                const src_img = item.url_picture === "" ? this.props.not_found : item.url_picture;
                                return <Produk key={key} nama={item.nama} harga={item.price}
                                    satuan={item.satuan} gambar={src_img} lokasi={item.lokasi} id={item.id}/>;
                            })}
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <Bread/>
                    <div class="container-fluid after-breadcrumb">
                    <div class="row text-main"> <strong>Kategori {this.props.kat_id} </strong> </div>
                        <div className="row">
                            {this.props.listProduk.map((item, key) => {
                                const src_img = item.url_picture === "" ? this.props.not_found : item.url_picture;
                                return <Produk key={key} nama={item.nama} harga={item.price}
                                    satuan={item.satuan} gambar={src_img} lokasi={item.lokasi} id={item.id}/>;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

// export default ListProduk;
export default connect(
    'listProdukByType, not_found, kat_id, listProduk, isSearch', actions
)(withRouter(ListProduk))
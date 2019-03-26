import Kategori from './../component/Kategori'
import Produk from './../component/Produk'
import React, { Component } from 'react';

import axios from 'axios';
import { Redirect } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class Home extends Component {
    componentDidMount = () => {
        // this.props.getMovies()
        this.props.getKategori();
        this.props.getProduk();
    }
    render() {
        return (
            <div>
                {/* <!-- slider masih kurang di atur ukurannya --> */}
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.ruwaifi.com/abduh/wp-content/uploads/2016/07/Banner-Paket-Buku-QURBAN-800x451-Real-Size.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="http://yourbandung.com/wp-content/uploads/2016/09/Promo-idul-adha-2016-1024x644.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.oketheme.com/wp-content/uploads/2016/09/Diskon-Idul-Adha.png" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


                <div class="container-fluid">
                    <div class="row text-main"> <strong>Kategori Favorit</strong> </div>
                    <div class="row text-category-animals">
                        {this.props.listKategori.slice(0, 8).map((item, key) => {
                            return <Kategori key={key} nama={item.nama} id={item.id}/>;
                        })}
                    </div>

                    <div class="row text-main"> <strong>Ternak Favorit</strong> </div>
                    <div class="row">
                        {/* <Produk /> */}
                        {this.props.listProduk.slice(0, 6).map((item, key) => {
                            const src_img = item.url_picture === "" ? this.props.not_found : item.url_picture;
                            return <Produk key={key} nama={item.nama} harga={item.price}
                            satuan={item.satuan} gambar={src_img} lokasi={item.lokasi} id={item.id} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

// export default Home;
export default connect(
    'listKategori, listProduk, not_found', actions
)(withRouter(Home))
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import FotoProduk from "./../component/FotoProduk"
import DeskripsiSingkatProduk from "./../component/DeskripsiSingkatProduk"
import DeskripsiPanjangProduk from "./../component/DeskripsiPanjangProduk"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class Detail extends Component {
    // componentDidMount = () => {
    //     this.props.getProdukId();
    // }

    componentDidMount = () => {
        this.props.getProdukId().then(() =>
        {
            if (this.props.gambar === ""){
            this.props.setImage(this.props.not_found)
        }
    })
    }

    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/produk">Product</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Detail</li>
                        <li class="ml-auto">
                            <Link to="/kandang">
                                <span className="fas fa-shopping-cart"></span>
                                <strong>Kandangku</strong>
                            </Link>
                        </li>
                    </ol>
                </nav>
                <div class="container-fluid after-breadcrumb">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <FotoProduk/>
                            {/* {this.props.listProdukId.slice(0).map((item, key) => {
                            const src_img = item.url_picture === null ? not_found : item.url_picture;
                            return <FotoProduk key={key} img={src_img}/>; 
                        })}*/}
                        </div>
                        <div class="col-md-6 col-12">
                            <DeskripsiSingkatProduk/>
                        </div>
                    </div>
                    <DeskripsiPanjangProduk/>
                </div>
            </div>
        );
    }
}

// export default Detail;
export default connect(
    'url_picture, gambar, not_found', actions
)(withRouter(Detail))
import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";
// import { isNull } from 'util';

class FotoProduk extends Component {
    
    render() {
        return (
            <div class="box-product-1">
                <img src={this.props.gambar} class="img-product" />
                {/* {this.props.img} */}
            </div>
        );
    }
}

// export default FotoProduk;
export default connect(
    'url_picture, gambar, not_found', actions
)(withRouter(FotoProduk))
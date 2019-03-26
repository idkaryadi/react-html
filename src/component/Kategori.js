import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Redirect } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";


class Kategori extends Component {
    doGetProdukByType = (e) => {
        this.props.getProdukByType(this.props.id).then(() => {
                this.props.setkat_id(this.props.nama)
                this.props.setIsSearch(false)
                this.props.history.replace('/produk')
                console.log("PINDAH COY", this.props.id)
            })};
    render() {
        return (
            <div className="col-md-3 col-4">
                <Link to="/produk">
                    <div className="box-kecil shadow-box" value={this.props.id} onClick={(e) => this.doGetProdukByType(e)}>{this.props.nama}</div>
                </Link>
            </div>
        );
    }
}

// export default Kategori;
export default connect(
    '', actions
)(withRouter(Kategori))

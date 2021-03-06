import React, { Component } from 'react';
// import { Redirect } from "react-router-dom"
import PropTypes from 'prop-types';
// import DashboardNavBar from "../component/DashboardNavBar";
import DashboardMenu from "../component/DashboardMenu";
import DashboardEditProduk from "../component/DashboardEditProduk";
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter, Redirect } from "react-router-dom";

class ClientEditProduct extends Component {
    render() {
        if(!this.props.islogin){
            return <Redirect to={{ pathname: "/login"}}/>;
        } else {
        return (
            <div>
                {/* <DashboardNavBar/> */}

                <div className="container-fluid">
                    <div className="row">
                        <nav style={{marginTop:"60px"}} className="col-md-2 d-none d-md-block bg-light sidebar">
                            <DashboardMenu />
                        </nav>
                        <main style={{marginTop:"60px"}} role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <DashboardEditProduk />
                        </main>
                    </div>
                </div>
            </div>

        );
    }}
}

// export default ClientEditProduct;
export default connect(
    'islogin', actions
)(withRouter(ClientEditProduct))
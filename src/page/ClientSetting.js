import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import PropTypes from 'prop-types';
// import DashboardNavBar from "../component/DashboardNavBar";
import DashboardMenu from "../component/DashboardMenu";
import DashboardSetting from "../component/DashboardSetting";
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class ClientSetting extends Component {
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
                            <DashboardSetting />
                        </main>
                    </div>
                </div>
            </div>

        );
    }}
}

// export default ClientSetting;
export default connect(
    'islogin', actions
)(withRouter(ClientSetting))
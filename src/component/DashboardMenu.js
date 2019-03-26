import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class DashboardMenu extends Component {
    render() {
        if(this.props.status === 'client'){
        return (
            <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li>
                    <img className="profile" src="https://2.bp.blogspot.com/-0__gZc_97PI/VkhEFpi1R6I/AAAAAAAAC0w/wNaMf2DfKH0/s1600/Foto+Profil+Light.jpg" />
                    <div className="profile-item">
                        <strong>{this.props.username}</strong> <br />
                        {this.props.lokasi}
                        </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard">
                        <i class="fas fa-weight-hanging" style={{marginRight:"5px"}}></i>
                        Products <span className="sr-only">(current)</span>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/editproduct">
                    <i class="fas fa-cog" style={{marginRight:"5px"}}></i>
                        Edit Product
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/addproduct">
                    <i class="fas fa-plus-circle" style={{marginRight:"5px"}}></i>
                        Add New Product
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/setting">
                    <i class="fas fa-user-cog" style={{marginRight:"5px"}}></i>
                        Setting
                    </Link>
                </li>
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"></h6>
        </div>
        );
    } else{
        return(
            <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li>
                    <img className="profile" src="https://www.royalfreeprivatepatients.com/wp-content/uploads/2014/10/Male-profile-silhouette.jpg" />
                    <div className="profile-item">
                        <strong>{this.props.username}</strong> <br />
                        {this.props.lokasi}
                        </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard">
                        <i class="fas fa-shopping-cart" style={{marginRight:"5px"}}></i>
                        Dashboard <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/history">
                        <i class="fas fa-history" style={{marginRight:"5px"}}></i>
                        History
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/setting">
                    <i class="fas fa-user-cog" style={{marginRight:"5px"}}></i>
                        Setting
                    </Link>
                </li>
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"></h6>
        </div>
        );
    }
    }
}

// export default DashboardMenu;
export default connect(
    'username, lokasi, status', actions
)(withRouter(DashboardMenu))
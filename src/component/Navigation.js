import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'

class Navigation extends Component {
    doSearch = () => {
        this.props.getSearch().then(() => {
            this.props.setIsSearch(true)
            // this.props.username, this.props.password
            this.props.history.replace('/produk')
            console.log("PINDAH COY")
        })};

    render() {
        if(!this.props.islogin){
            return(             
            <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src="asset/cow.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        <strong>Ternakku</strong>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0" onSubmit={e => e.preventDefault()}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Mau ternak ..."
                            aria-label="Search" name="keyword" onChange={e => this.props.setField(e)} />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit"
                            onClick={() => this.doSearch()}>Cari</button> 
                    </form>
                    <div className="navbar-nav ml-auto">
                        <div className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up <i class="fas fa-user-plus"></i></Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/login">Login <i class="fas fa-sign-in-alt"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        )

        } else {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        <img src="asset/cow.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            <strong>Ternakku</strong>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0" onSubmit={e => e.preventDefault()}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Mau ternak ..." aria-label="Search" name="keyword" onChange={e => this.props.setField(e)} />
                            <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={() => this.doSearch()}>Cari</button> 
                        </form>
                        <div className="navbar-nav ml-auto">
                            <div className="nav-item">
                                <Link className="nav-link" to="/dashboard">{this.props.username} <i class="fas fa-user-circle"></i></Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/" onClick={()=> this.props.postSignout()}>Log Out <i class="fas fa-sign-in-alt"></i></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    );
    }}
}

// export default Navigation;
export default connect(
    'keyword, islogin, username', actions
)(withRouter(Navigation))

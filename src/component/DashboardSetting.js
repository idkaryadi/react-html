import React, { Component } from 'react';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";

class DashboardSetting extends Component {
    componentDidMount = () => {
        // this.props.getMovies()
        this.props.getUser()
        // this.props.getProduk();
    }
    doPutUser = () =>{
        this.props.putUser();
        this.props.history.replace('/dashboard')
    }
    doDelUser = () =>{
        this.props.delUser();
        this.props.postLogout();
        this.props.history.replace('/')
    }
    render() {
        return (
            <div>
                {/* <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"> */}
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h4 className="h2">Ubah Profile :)</h4>
                        <button className="btn btn-outline-secondary ml-auto" onClick={() => this.doDelUser()}>Hapus</button>
                    </div>

                    <div className="">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="form-group row">
                                <label for="username" className="col-sm-3 col-form-label">Username Baru</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="username" name="username_baru"
                                        placeholder={this.props.username} onChange={e => this.props.setField(e)}/>
                                </div>
                            </div>

                            {/* <div className="form-group row">
                                <label for="gender" className="col-sm-3 col-form-label">Gender</label>
                                <div className="col-sm-4">
                                    <input list="gender-list" className="form-control" id="gender" name="gender"
                                        placeholder="Gender" onChange={e => this.props.setField(e)} />
                                    <datalist id="gender-list">
                                        <option value="Male" />
                                        <option value="Female" />
                                    </datalist>
                                </div>
                            </div> */}

                            <div className="form-group row">
                                <label for="lokasi" className="col-sm-3 col-form-label">Kota Asal Baru</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="lokasi" name="lokasi_baru"
                                        placeholder={this.props.lokasi} onChange={e => this.props.setField(e)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="kab-kota" className="col-sm-3 col-form-label">Email Baru</label>
                                <div className="col-sm-4">
                                    <input type="email" className="form-control" id="email" name="email_baru"
                                        placeholder={this.props.email} onChange={e => this.props.setField(e)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="password" className="col-sm-3 col-form-label">Password Baru</label>
                                <div className="col-sm-4">
                                    <input type="password" className="form-control" id="password" name="password_baru"
                                        placeholder="Password Baru" onChange={e => this.props.setField(e)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="password" className="col-sm-3 col-form-label">Konfirmasi Password Baru</label>
                                <div className="col-sm-4">
                                    <input type="password" className="form-control" id="password" placeholder="Konfirmasi Password" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <input type="submit" id="middle-submit" className="btn btn-warning" value="Simpan" onClick={() => this.doPutUser()}/>
                            </div>
                        </form>
                    </div>
            </div>
        );
    }
}

// export default DashboardSetting;
export default connect(
    'username, lokasi, email', actions
)(withRouter(DashboardSetting))

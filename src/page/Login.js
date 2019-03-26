import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { actions } from './../Store'
import { connect } from 'unistore/react'

class Login extends Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
                // this.props.username, this.props.password
                this.props.history.replace('/dashboard')
                console.log("PINDAH COY")
            })};

    render() {
        return (
            <div>
                <body className="login-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className=" login-title">
                                    <img src="Cowicon.svg" width="50" height="50" className="d-inline-block align-top" alt="" />
                                    <strong>Ternakku</strong>
                                </div>
                                <div className="login-input">
                                    Belum punya Akun? <Link to="/signup">Daftar disini.</Link>
                                </div>
                                <form onSubmit={e => e.preventDefault()}>
                                    {/* <!--  onsubmit="validation();" --> */}
                                    <input
                                    className="login-input"
                                    type="text"
                                    name="username"
                                    // id="username"
                                    placeholder="Username"
                                    onChange={e => this.props.setField(e)} //changeInput
                                    /><br /><br />

                                    <input className="login-input"
                                    type="password"
                                    name="password"
                                    // id="password"
                                    placeholder="Password"
                                    onChange={e => this.props.setField(e)} //changeInput
                                    /><br /><br />
                                    <input className="tambah" type="checkbox" name="" />Ingat saya
                                    <input type="submit" id="middle-submit" 
                                        className="login-bottom btn btn-secondary" value="Login"
                                        onClick={() => this.doLogin()} />
                                    {/* <button style={{ marginRight: "2%" }} onClick={() => this.doLogin()}
                                className="btn btn-outline-primary">SignIn</button> */}
                                </form>
                                <br />
                                <a className="tambah" href="http://mail.google.com/">Lupa password?</a>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <script src="assets/js/script.js"></script>
                </body>
            </div>
        );
    }
}

// export default Login;
export default connect(
    'username, password', actions
)(withRouter(Login))
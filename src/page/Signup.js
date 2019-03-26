import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom";
import { actions } from '../Store'
import { connect } from 'unistore/react'


class Signup extends Component {
    doSignUp = () => {
        this.props.postSignUp().then(() => {
            this.props.postLogin();
            this.props.getUser();
            this.props.history.replace('/dashboard')
            })
        };
    
    render() {
        return (
            <body className="login-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className=" login-title">
                            <img src="Cowicon.svg" width="50" height="50" className="d-inline-block align-top" alt=""/>
                            <strong>Ternakku</strong><br/>
                        </div>
                        <div className="login-input">
                                Daftar akun baru sekarang
                        </div>
                        <form onSubmit={e => e.preventDefault()}>
                            {/* <!--  onsubmit="validation();" --> */}
                            <input className="login-input" type="text" name="username" id ="username" placeholder="Username" onChange={(e) => {this.props.setField(e)}}/><br/><br/>

                            <input className="tambah" type="radio" name="status" value="user" onChange={e => this.props.setField(e)}/>Pembeli
                            <input className="tambah" type="radio" name="status" value="client" onChange={e => this.props.setField(e)}/>Peternak <br/><br/>
                            
                            <input list="gender-list" className="login-input" id="gender" 
                                name="gender" placeholder="Gender" onChange={e => this.props.setField(e)}/>
                                <datalist id="gender-list">
                                    <option value="Male" />
                                    <option value="Female" />
                                </datalist>
                                <br/><br/>

                            <input className="login-input" type="text" name="lokasi" id ="kota" placeholder="Kota Asal"
                                onChange={e => this.props.setField(e)} /><br/><br/>

                            <input className="login-input" type="email" name="email" id ="email" placeholder="Email"
                                onChange={e => this.props.setField(e)} /><br/><br/>

                            <input className="login-input" type="password" name="password" id="password" placeholder="Password"
                                onChange={e => this.props.setField(e)} /><br/><br/>

                            <input className="login-input" type="password" name="" id="confirm-password" placeholder="Konfirmasi Password"/><br/><br/>
                            <input className="tambah" type="checkbox" id="agreement" name=""/>Saya menyetujui Aturan Ternakku
                            <input type="submit" onClick={() => this.doSignUp()} id="middle-submit" className="login-bottom btn btn-secondary" value="Daftar"/>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <script src="assets/js/script.js"></script>
        </body>
        )
    }
}

// export default Signup;
export default connect(
    '', actions
)(withRouter(Signup))
// username, password, lokasi, email, gender, status
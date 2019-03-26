import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../Store';

class Login extends Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
        console.log("this", this);
        this.props.history.replace("/profile");
        })
    };
    render() {
        console.log("state", this.props.email);
        return (
            <section className="content signin text-center" style={{marginBottom:'10%'}}>
                <form onSubmit={e => e.preventDefault()} className="formsignin">
                    <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Sign In</h1>
                    {/* <img src={require("../images/img/heroLogo.png")} className="logo-animex"/> */}
                    {/* <img src={require("../images/img/background-auntum.jpg")} style={{width:"100%"}}/> */}
                    <div style={{ marginBottom: "2%" }}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                        <br /> <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                    </div>
                    <button style={{ marginRight: "2%" }} onClick={() => this.doLogin()} className="btn btn-outline-primary">SignIn</button>
                    <button type="reset" className="btn btn-outline-primary">Reset</button>
                </form>
            </section>
        );
    }
}

export default connect("api_key,is_login,full_name,email,username,password", actions)(withRouter(Login));
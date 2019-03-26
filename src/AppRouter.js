import React, {Component} from "react";
import MainRoute from "./Routes/MainRoutes";
import {withRouter} from "react-router-dom";

// App styles
// import "./App.css"
// Custom component
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

class AppAjax extends Component{
    postSignout = () =>{
        localStorage.setItem("is_login", false);
        // localStorage.removeItem("is_login");
        // localStorage.clear()
        this.props.history.push("/");
    };
    render (){
        return (
            <div className="App">
                {/* <Navigation postSignout={this.postSignout}/> */}
                <Navigation/>
                <MainRoute/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(AppAjax);
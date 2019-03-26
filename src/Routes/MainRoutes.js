import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../page/Home"
import Login from "../page/Login"
import Signup from "../page/Signup"
import ListProduk from "../page/Produk"
import Kandang from "../page/Kandang"
import NotMatch from "../page/NoMatch"
import Detail from "../page/Detail";
import ClientProduk from "../page/ClientProduk";
import ClientEditProduct from "../page/ClientEditProduct";
import ClientAddProduct from "../page/ClientAddProduct";
import ClientSetting from "../page/ClientSetting";
import ClientHistory from "../page/ClientHistory";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/login" component={Login} />
            <Route exact path ="/signup" component={Signup} />
            <Route exact path ="/produk" component={ListProduk} />
            <Route exact path ="/kandang" component={Kandang} />
            <Route exact path ="/detail" component={Detail} />
            <Route exact path = "/dashboard" component ={ClientProduk}/>
            <Route exact path = "/editproduct" component ={ClientEditProduct}/>
            <Route exact path = "/addproduct" component ={ClientAddProduct}/>
            <Route exact path = "/setting" component ={ClientSetting}/>
            <Route exact path = "/history" component ={ClientHistory}/>
            <Route component={NotMatch} />
        </Switch>
    );
};

export default MainRoute;
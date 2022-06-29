import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewProduct from "./pages/NewProduct";
import ProfileAdmin from "./pages/ProfileAdmin";
import Carrinho from "./pages/Carrinho";
import ProductsList from "./pages/ProductsList";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/products/new" component={NewProduct} />
                <Route path="/admin" component={ProfileAdmin} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/products/list" component={ProductsList} />
            </Switch>
        </BrowserRouter>
    );
}


import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";

function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {/* Por enquanto redireciona pra "vitrine mesmo" */}
        <Route exact path="/">
          <Store />
        </Route>

        <Route exact path="/home">
          <Store />
        </Route>

        <Route path="/store">
          <Store />
        </Route>

        <Route path="/product/:id">
          <Product />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/payment">
          <Payment />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;

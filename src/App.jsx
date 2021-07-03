import React, { Fragment } from "react";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Product } from "./components/product/Product";
import { Category } from "./components/categories/Category";
import { CreateProduct } from "./components/createProduct/CreateProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/electronics">
            <Category categoryName="category/electronics" />
          </Route>
          <Route path="/jewelery">
            <Category categoryName="category/jewelery" />
          </Route>
          <Route path="/men">
            <Category categoryName="?limit=4" />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/create">
            <CreateProduct />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;

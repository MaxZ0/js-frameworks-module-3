import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Product from "./components/product/Product";
import Nav from "./components/layout/Nav";
import "./App.css";
import DetailPage from "./components/product/Detail";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/details/:id" exact>
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

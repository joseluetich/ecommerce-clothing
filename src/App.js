import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

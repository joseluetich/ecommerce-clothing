import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import Shop from "./pages/shop/shop";
import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shop" exact>
        <Shop />
      </Route>
    </div>
  );
}

export default App;

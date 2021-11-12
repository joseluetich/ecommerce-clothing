import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import "./App.css";
import SignInAndSignOutPage from "./pages/sign-in-sign-out/sign-in-sign-out";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route path="/signIn" exact>
          <SignInAndSignOutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/ShopPage";
import Header from "./components/header/Header";

function App(props) {
  console.log(props);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

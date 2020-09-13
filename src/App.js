import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
//import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./components/pages/Discover";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

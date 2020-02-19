import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home.component"
import Navigation from "./components/navigation.component"
import About from "./components/about.component"
function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

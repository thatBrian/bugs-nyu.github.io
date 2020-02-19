import React,{useState} from 'react';
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
import Events from "./components/events.component"
import Contact from "./components/contact.component"
function App() {
  const[eventList,setEventList] = useState([])
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/events">
          <Events eventList ={eventList}/>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

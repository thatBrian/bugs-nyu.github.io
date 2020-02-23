import React, { useState, useEffect } from 'react';
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
import Thanks from "./components/thanks.component"
function App() {

  const [eboardList, setEboardList] = useState([])
  const [facultyList, setFacultyList] = useState([])
  const [foundersList, setFoundersList] = useState([])
  const [alumniList, setAlumniList] = useState([])
  const [eventList, setEventList] = useState([])

  async function fetchUrl() {
    const response = await fetch("http://localhost:8000/api/profiles")
    const profiles = await response.json();
    var ebList = []
    var faList = []
    var foList = []
    var alList = []
    for (const profile in profiles) {
      switch (profiles[profile].type) {
        case 'eboard':
          ebList.push(profiles[profile])
          break;
        case 'alum':
          if (profiles[profile].position == "Founder") {
            foList.push(profiles[profile])
          } else {
            alList.push(profiles[profile])
          }
          break;
        case 'mentor':
          faList.push(profiles[profile])
          break;

      }
    }
    setEboardList(ebList)
    setFacultyList(faList)
    setFoundersList(foList)
    setAlumniList(alList)
  }
  useEffect(() => {
    fetchUrl();
  }, []);



  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About
            eboard={eboardList}
            alum={alumniList}
            mentor={facultyList}
            founders={foundersList}
          />
        </Route>
        <Route exact path="/events">
          <Events eventList={eventList} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

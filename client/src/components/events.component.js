import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Event from "./event.component"
function Events() {
    return (
        <div id="events-container">
            <div id="events-header">
                <Link to="/"><img className="home-logo" src="./logo.svg"></img></Link>
                <h1>Events</h1>
            </div>
            <div id="events-content">
                <Event></Event>
                <Event></Event>
                <Event></Event>
                <Event></Event>
                <Event></Event>
                <Event></Event>
            </div>

        </div>
    );
}

export default Events;

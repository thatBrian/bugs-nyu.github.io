import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Navigation() {
    return (
        <div id="navigation-bar">
            <div>
                {/* <img id="navigation-logo" src="./logo.svg"></img> */}
            </div>
            <div className="flex1"></div>
            <div>

                <div className="navigation-tabs">
                    <Link to="/about">About</Link>
                </div>
                <span className="navigation-tabs">
                    <Link to="/events">Events</Link>
                </span>
                <span className="navigation-tabs">
                    <Link to="/contact">Contact</Link>
                </span>
            </div>
        </div>
    );
}

export default Navigation;

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Home() {
    return (
        <div id="navigation-bar">
            <div>
                {/* <img id="navigation-logo" src="./logo.svg"></img> */}
            </div>
            <div class="flex1"></div>
            <div>

                <div class="navigation-tabs">
                    <Link to="/about">About</Link>
                </div>
                <span class="navigation-tabs">
                    <Link to="/events">Events</Link>
                </span>
                <span class="navigation-tabs">
                    <Link to="/users">Contact</Link>
                </span>
            </div>
        </div>
    );
}

export default Home;

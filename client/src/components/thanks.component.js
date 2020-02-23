import React from 'react';
import {Link} from "react-router-dom";

function Thanks() {
    return (
        <div id="thanks-container">
            <div>

                <h1>Thank You!</h1>
                <Link to="/"><img className="home-logo" src="./logo.svg"></img></Link>
                <h3>We will get back to you as soon as possible!</h3>
            </div>
        </div>
    );
}

export default Thanks;

import React from 'react';
import {Link} from "react-router-dom";

function Contact() {
    return (
        <div id="contact-container">
            <div id="contact-header">
                <Link to="/"><img alt="Bugs Logo for Contacts" className="home-logo" src="./logo_phone.svg"></img></Link>
                <h1>Contact</h1>
            </div>
            <div id="contact-description">
                Do you have a burning question? Fill out the form below and we will get back to you!
                You can also checkout our <div id="contact-facebook">Facebook</div> page where we keep the most up-to-date info.
            </div>
            <form id="contact-form" action="http://localhost:8000/api/contact">
                <div>
                    <input className="contact-input" placeholder="name" required></input>
                </div>
                <div>
                    <input className="contact-input" placeholder="email" required></input>
                </div>
                <div>
                    <textarea className="contact-input" placeholder="question(s)" rows="15" required></textarea>
                </div>
                <div id="contact-submit-wrapper">
                    <input type="submit" id="contact-submit">
                    </input>
                </div>

            </form>
        </div>
    );
}

export default Contact;

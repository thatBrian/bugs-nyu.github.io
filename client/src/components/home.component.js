import React from 'react';

function Home() {
  return (
    <div id="home-container">
      <div id="home-center">
        <div id="home-welcome">
          <img className="home-logo" src="./logo.svg"></img>
          <div>
          <span id="home-message">Welcome to </span>
          <span id="bugs">BUGS</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

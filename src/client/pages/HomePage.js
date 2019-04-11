import React from "react";

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Welcome!</h1>
        <p className="lead text-center">
          Checkout these awesome Server Side Rendering Features!
          <p>Built with:</p>
          <ul>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Mongodb</li>
            <li>OAuth Authenication</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default {
  component: Home
};

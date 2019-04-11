import React from "react";

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Welcome!</h1>
        <p className="lead text-center" style={{ paddingBottom: "20px" }}>
          Checkout these awesome Server Side Rendering Features!
          <h3 className="text-center">Built with</h3>
          <div className="container" style={{ maxWidth: "500px" }}>
            <ul className="list-group text-center">
              <li className="list-group-item">Javascript ES6</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Redux</li>
              <li className="list-group-item">React Router</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">Mongodb</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">OAuth Authenication</li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
};

export default {
  component: Home
};

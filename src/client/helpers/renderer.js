import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

// Initialize a static server to be used with our server side codebase
export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      {/* Context gives us the ability to notice error handling, take it and pass it down to all of the renderd components*/}
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  // Create an instance of the helmet library and pull all the tags out
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="icon" type="image/png" href="https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/binaryCoders.jpg"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../styles/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <style>
        .side-bar {
          background-color: #363c42;
          display: table-row;
          color: #f5f5f5;
        }
        img {
          max-height: 250px;
        }
        
        .dashboard {
          background-color: #ededed;
          display: table-row;
        }
        .margin {
          margin-right: 10px;
        }
        .property-card {
          color: rgba(0, 0, 0, 0.87);
          /* position: relative; */
          font-size: 20px;
          margin: 30px, 10px, 0px, 10px;
          /* box-shadow: 2px 0px 0px 2px rgba(0, 0, 0, 0.14); */
          margin-bottom: 30px;
          border-radius: 6px;
          margin-right: 20px;
        }
        .cardUpper {
          text-align: right;
          background: transparent;
          box-shadow: none;
          color: #fff;
          margin: 0 15px;
          padding: 0;
          position: relative;
          border-bottom: none;
          box-sizing: border-box;
          display: block;
        }
        .cardUpper {
          text-align: right;
          background: transparent;
          box-shadow: none;
          color: #fff;
          margin: 0 15px;
          padding: 0;
          position: relative;
          border-bottom: none;
          box-sizing: border-box;
          display: block;
        }
        
        .cardLower {
          border-top: 1px solid#eee;
          margin-top: 20px;
          margin: 0 15px 10px;
          border: 0;
          padding: 0;
          display: flex;
          padding-top: 10px;
          align-items: center;
          border-radius: 0;
          justify-content: space-between;
          background-color: transparent;
        }
        .product-image {
          /* float: left;
          padding: 15px;
          margin-top: -20px;
          margin-right: 15px; */
          border-radius: 3px;
          background-color: #999;
          background: linear-gradient(60deg, #999, #f3f4f4);
          box-shadow: 2px 0px 6px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px #999;
        }
        
        .productText {
          color: #999;
          margin: 0;
          font-size: 14px;
          margin-top: 0;
          padding-top: 10px;
          margin-bottom: 0;
        }
        html * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .button {
          margin: 20px;
          width: 75px;
        }
        
        .card-style {
          width: 18rem;
          margin-top: 75px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px #999;
          border-radius: 6px;
          margin-right: 40px;
        }
        
        .card-quantity {
          font-size: 40px;
        }
        
        .card-img-height {
          height: 25%;
        }
        
        .card-seperator {
          border-top: 1px solid#eee;
        }
        
        #admin {
          text-align: center;
          font-size: 24px;
          font-weight: 500;
        }
        
        #dashboard-icon {
          font-size: 24;
        }
        #dashboard {
          text-align: left;
          font-size: 24px;
          font-weight: 500;
        }
        
        .safe {
          border: none;
        }
        
        .low-qty {
          border: 2px solid red;
          background-color: red;
          opacity: 0.6;
        }
        
        .max-height {
          height: 288px;
        }
        
        .add-product-icon {
          float: center;
          font-size: 15px;
          padding-left: 15px;
        }
        
        .add-product-from {
        }
        
        #add-product-input {
          padding-top: -5px;
        }
        
        #add-product-button {
          margin: 5px;
          width: 75px;
          text-align: center;
          padding-bottom: 4px;
          margin-bottom: 15px;
        }
        
        #center {
          text-align: center;
        }
        
        </style>
        </head>
      <body>
        <div id='root'>
          ${content} 
        </div>
     
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src='bundle.js'></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <body>
    </html>
  `;
};

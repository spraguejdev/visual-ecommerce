import React from "react";

// StaticRouter turns the context prop into a new name, staticContext here
// We have to default the value of staticContext because in the browser, the router is being rendered with the browserRouter, and does not have the contect obj
const NotFoundPage = ({ staticContext = {} }) => {
  // After we render the component, if the property not found and it's = to true, we can show that something bad happenend in our app
  staticContext.notFound = true;
  return (
    <div>
      <h1>Oops! Page not found.</h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};

import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";

const App = () => {
  return <Users />;
};

reactDom.render(<App />, document.getElementById("root"));

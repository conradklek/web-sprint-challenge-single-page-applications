import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <h2 id="logo">COCO'S PIZZA!</h2>
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Form} />
        </Switch>
      </div>
    </>
  );
};

export default App;

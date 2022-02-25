import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link id="order-pizza" to="/pizza">
            Pizza
          </Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Form} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

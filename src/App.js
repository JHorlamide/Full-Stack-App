import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*** Custom Component ***/
import NavBar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashbord/Dashboard";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import SignIn from "./Components/Auth/SignedIn";
import SignUp from "./Components/Auth/SignedUp";
import CreateProject from './Components/Projects/CreateProject';

function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

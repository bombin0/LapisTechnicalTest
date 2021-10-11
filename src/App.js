import React, { useState, useEffect } from "react";
import './App.css';
import Dashboard from './Components/Dashboard';
import MapComponent from './Components/mapComponent';
import CreateProfile from './Components/CreateProfile';
import Home from "./Components/Home";
import editProfile from './Components/editProfile';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import {Provider} from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {

  return (
  <Router>
    <div className="App">
    <Switch>
      <Route path="/edit_profile" component={editProfile}/> 
      <Route path="/" component={Home}/> 
    </Switch>
    </div>
    </Router>
  );
}

export default App;

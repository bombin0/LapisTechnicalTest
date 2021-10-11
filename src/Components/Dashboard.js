import React, { Component } from 'react';
import Person from './CreateProfile';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";


class Dashboard extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Technical Test</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link to ="/" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to ="edit_Profile" class="nav-link">Edit Profile</Link>
                </li>
                </ul>
            </div>
          </nav>
        );
    }
}

export default Dashboard;
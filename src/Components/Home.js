import React, { Component, useState, useEffect } from "react";
import '../App.css';
import App from "../App";
import Dashboard from "./Dashboard";
import MapComponent from "./mapComponent";
import CreateProfile from "./CreateProfile";
import editProfile from "./editProfile";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import {Provider} from 'react-redux'


function Home() {

  return (
    <div className="Home">
        <Dashboard/>
        <center>
        <h1>Create Profile</h1>
        <h4>Select location</h4>
        <MapComponent/>
        <CreateProfile/>

        <h2>Current Profile Information</h2>
        
          <p>Latitude: {localStorage.getItem("Latitude")}</p>
          <p>Longitude: {localStorage.getItem("Longitude")}</p>
          <p>Name: {localStorage.getItem("Name")}</p>
          <p>Email: {localStorage.getItem("Email")}</p>
          <p>Date of Birth: {localStorage.getItem("Date Of Birth")}</p>

        </center>
    </div>

      
  );
}

export default Home;
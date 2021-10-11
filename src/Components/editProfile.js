import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import MapComponent from './mapComponent';


class editProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            dateOfBirth: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('Name', this.state.name);
        localStorage.setItem('Email', this.state.email);
        localStorage.setItem('Date Of Birth', this.state.dateOfBirth);
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    dobhandler = (event) => {
        this.setState({
            dateOfBirth: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.name} Edit Complete!`)
        console.log(this.state);
        this.setState({
            name: "",
            email: "",
            dateOfBirth: '',
            location: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>
                <Dashboard/>

                <h1>Edit Profile</h1>

                <br/>

                <p>Current Name: {localStorage.getItem("Name")}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit: </label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="Name..." /><br />
                    <input type="submit" value="Change" />
                </form>
                <br/>
                <p>Current Email: {localStorage.getItem("Email")}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit: </label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />

                    <input type="submit" value="Change" />
                </form>
                <br/>
                <p>Current Date of Birth: {localStorage.getItem("Date Of Birth")}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit: </label> <input type="date" value={this.state.dateOfBirth} onChange={this.dobhandler} placeholder="date of birth" /><br />
                    <input type="submit" value="Change" />
                </form>
                <br/>
                <p>Current Location</p>
                <p>Latitude: {localStorage.getItem("Latitude")}</p>
                <p>Longitude: {localStorage.getItem("Longitude")}</p>

                <center>
                <MapComponent/>
                </center>
            </div>
            

        );
    }
}

export default (editProfile);
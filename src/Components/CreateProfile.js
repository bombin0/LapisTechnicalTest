import React, { Component, useState } from 'react'
import '././Layout/style.css'


class CreateProfile extends Component {
    

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
        alert(`${this.state.name} Profile Created!`)
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

                <form onSubmit={this.handleSubmit}>
                    <label>Name :</label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="Name..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Date of Birth :</label> <input type="date" value={this.state.dateOfBirth} onChange={this.dobhandler} placeholder="date of birth" /><br />

                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
            </div>            
            
        )
    }
}

export default CreateProfile
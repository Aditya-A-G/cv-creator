import React, { Component } from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { Typography } from "@mui/material";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      photo: "",
      address: "",
      phone: "",
      email: "",
      description: "",
      experience: [],
      education: [],
    };
  }

  handlePersonalInfo = (state) => {
    this.setState(state);
  };

  addExperience = (state) => {
    this.setState({
      experience: [...this.state.experience, state],
    });
    console.log(this.state.experience);
  };

  deleteExperience = (index) => {
    const experience = this.state.experience;
    experience.splice(index, 1);
    this.setState({ experience });
  };

  addEducation = (state) => {
    this.setState({
      experience: [...this.state.education, state],
    });
  };

  deleteEducation = (index) => {
    const education = this.state.education;
    education.splice(index, 1);
    this.setState({ education });
  };

  render() {
    return (
      <div className="appContainer">
        <Header />
        <div className="formContainer">
          <div className="formWrapper">
            <div>
            <Typography variant="h5">Personal Information</Typography>
            <PersonalInfo handlePersonalInfo={this.handlePersonalInfo} />
            </div>
            <div>
            <Typography variant="h5">Experience</Typography>
            <Experience addExperience={this.addExperience} />
            </div>
            <div>
            <Typography variant="h5">Education</Typography>
            <Education addEducation={this.addEducation} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

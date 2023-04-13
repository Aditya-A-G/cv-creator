import React, { Component } from "react";
import { Typography, Button } from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ResumeHeader from "./components/ResumeHeader";
import ResumeDetails from "./components/ResumeDetails";
import ResumePersonalDetails from "./components/ResumePersonalDetails";
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

  updateExperience = (state, index) => {
    const experience = this.state.experience;
    experience[index] = state;
    this.setState({ experience });
  };
  deleteExperience = (index) => {
    const experience = this.state.experience;
    console.log(index);

    experience.splice(index, 1);
    this.setState({ experience });
  };

  addEducation = (state) => {
    this.setState({
      education: [...this.state.education, state],
    });
    console.log(this.state.education);
  };
  updateEducation = (state, index) => {
    const education = this.state.education;
    education[index] = state;
    this.setState({ education });
  };
  deleteEducation = (index) => {
    const education = this.state.education;
    education.splice(index, 1);
    this.setState({ education });
  };

  createPDF = () => {
    // Get the HTML element you want to create a PDF of
    const element = document.querySelector(".resumeContainer");
    const pdfWidth = element.offsetWidth;
    const pdfHeight = element.offsetHeight;
    const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
  
    // Use html2canvas to render the element as an image.
    html2canvas(element).then((canvas) => {
      // Add the image to the PDF document.
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  
      // Save the PDF document.
      pdf.save("document.pdf");
    });
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
            {this.state.experience.map((experience, index) => {
              console.log(index);
              return (
                <Experience
                  key={index}
                  experienceKey={index}
                  position={experience.position}
                  company={experience.company}
                  city={experience.city}
                  from={experience.from}
                  to={experience.to}
                  deleteExperience={this.deleteExperience}
                  updateExperience={this.updateExperience}
                  displayDeleteBtn={true}
                />
              );
            })}
            <div>
              <Typography variant="h5">Education</Typography>
              <Education addEducation={this.addEducation} />
            </div>
            {this.state.education.map((education, index) => {
              console.log(index);
              return (
                <Education
                  key={index}
                  educationKey={index}
                  university={education.university}
                  city={education.city}
                  degree={education.degree}
                  subject={education.subject}
                  from={education.from}
                  to={education.to}
                  deleteEducation={this.deleteEducation}
                  updateEducation={this.updateEducation}
                  displayDeleteBtn={true}
                />
              );
            })}
          </div>
        </div>
        <div className="resumeContainer">
          <ResumeHeader
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            title={this.state.title}
          />
          <div className="resumeContent">
            <ResumeDetails
              description={this.state.description}
              experience={this.state.experience}
              education={this.state.education}
            ></ResumeDetails>
            <ResumePersonalDetails
              address={this.state.address}
              phone={this.state.phone}
              email={this.state.email}
              photo={this.state.photo}
            ></ResumePersonalDetails>
          </div>
        </div>
        <div className="optionsContainer">
          <Button
            variant="contained"
            size="large"
            onClick={this.createPDF}
          >
            Create PDF
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

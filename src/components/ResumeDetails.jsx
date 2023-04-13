import React, { Component } from "react";
import { Divider, Typography } from "@mui/material";
import "../ResumeDetails.css";

export class ResumeDetails extends Component {
  render() {
    return (
      <div className="resumeDetailsContainer">
        <div className="resumeDetailsWrapper">
          {this.props.description && (
            <div className="descriptionSection">
              <Typography variant="h5" color={"primary"}>
                Description
              </Typography>
              <Divider />
              <Typography variant="body1" className="resumeDetailsDescription">
                {!this.props.description
                  ? "[Description]"
                  : this.props.description}
              </Typography>
            </div>
          )}
          {this.props.experience.length > 0 && (
            <div className="experienceSection">
              <Typography variant="h5" color={"primary"}>
                Experience
              </Typography>
              <Divider />
              <div className="experience">
                {this.props.experience.map((exp, index) => {
                  return (
                    <div key={index} className="resumeDetailsExperience">
                      <div>
                        <Typography variant="body2" fontSize={"1rem"}>
                          {exp.from}
                        </Typography>
                        <Typography variant="body2">to</Typography>
                        <Typography variant="body2" fontSize={"1rem"}>
                          {exp.to}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h6">{exp.position}</Typography>
                        <Typography variant="body1">
                          {exp.company + ", " + exp.city}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {this.props.education.length > 0 && (
            <div className="educationSection">
              <Typography variant="h5" color={"primary"}>
                Education
              </Typography>
              <Divider />
              <div className="education">
                {this.props.education.map((edu, index) => {
                  return (
                    <div key={index} className="resumeDetailsEducation">
                      <div>
                        <Typography variant="body2" fontSize={"1rem"}>
                          {edu.from}
                        </Typography>
                        <Typography variant="body2">to</Typography>
                        <Typography variant="body2" fontSize={"1rem"}>
                          {edu.to}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h6">
                          {edu.university + ", " + edu.city}
                        </Typography>
                        <Typography variant="body2" fontSize={"1rem"}>
                          Degree: {edu.degree}
                        </Typography>
                        <Typography variant="body2" fontSize={"1rem"}>
                          Subject: {edu.subject}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ResumeDetails;

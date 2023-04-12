import React, { Component } from "react";
import { Avatar, Divider, Typography } from "@mui/material";
// import profileImg from "../profile.jpeg";
import "../ResumePersonalDetails.css";

export class ResumePersonalDetails extends Component {
  render() {
    return (
      <div className="resumePersonalDetailsContainer">
        <div className="resumePersonalDetailsWrapper">
          <div className="profileImage">
            <Avatar
              alt="Remy Sharp"
              src={this.props.photo}
              sx={{ height: 124, width: 124 }}
            />
          </div>
          <div className="personalDetails">
            <div>
              <Typography variant="h5" color={"primary"}>
                Personal Details
              </Typography>
              <Divider />
            </div>
            <div>
              <Typography variant="h6">
                Address
              </Typography>
              <Typography variant="body2" fontSize={"1rem"}>
                  {this.props.address}
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
              Phone Number
              </Typography>
              <Typography variant="body2" fontSize={"1rem"}>
              {this.props.phone}
             
         
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                Email
              </Typography>
              <Typography variant="body2" fontSize={"1rem"}>
              {this.props.email}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePersonalDetails;

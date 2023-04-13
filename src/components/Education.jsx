import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

export class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
      helperState: {
        university: !this.props.university ? "" : this.props.university,
        city: !this.props.city ? "" : this.props.city,
        degree: !this.props.degree ? "" : this.props.degree,
        subject: !this.props.subject ? "" : this.props.subject,
        from: !this.props.from ? "" : this.props.from,
        to: !this.props.to ? "" : this.props.to,
        displayDeleteBtn: !this.props.displayDeleteBtn
          ? false
          : this.props.displayDeleteBtn,
        editEducation: false,
      },
    };
  }

  onChange = (e) => {
    if (this.state.helperState.displayDeleteBtn) {
      //do nothing
      console.log(e.target.name);
      console.log(e.target.value);
    } else {
      this.setState({
        education: { ...this.state.education, [e.target.name]: e.target.value },
      });
      console.log(e.target.value);
    }
  };
  addEducation = () => {
    console.log(this.state.education);
    this.props.addEducation(this.state.education);
  };
  deleteEducation = () => {
    this.props.deleteEducation(this.props.educationKey);
  };

  handleEdit = () => {
    this.setState({
      education: {
        university: this.props.university,
        city: this.props.city,
        degree: this.props.degree,
        subject: this.props.subject,
        from: this.props.from,
        to: this.props.to,
      },
      helperState: {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        editEducation: true,
        displayDeleteBtn: false,
      },
    });
  };

  updateEducation = () => {
    console.log(this.state.education);
    this.setState({
      helperState: {
        editEducation: false,
        displayDeleteBtn: true,
      },
    });
    this.props.updateEducation(this.state.education, this.props.educationKey);
  };

  render() {

    return (
      <div>
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="University Name"
          value={
            !this.state.helperState.university
              ? this.state.education.university
              : this.state.helperState.university
          }
          inputProps={{ name: "university", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="City"
          value={
            !this.state.helperState.city
              ? this.state.education.city
              : this.state.helperState.city
          }
          inputProps={{ name: "city", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Degree"
          value={
            !this.state.helperState.degree
              ? this.state.education.degree
              : this.state.helperState.degree
          }
          inputProps={{ name: "degree", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Subject"
          value={
            !this.state.helperState.subject
              ? this.state.education.subject
              : this.state.helperState.subject
          }
          inputProps={{ name: "subject", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="From"
          value={
            !this.state.helperState.from
              ? this.state.education.from
              : this.state.helperState.from
          }
          inputProps={{ name: "from", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="To"
          value={
            !this.state.helperState.to
              ? this.state.education.to
              : this.state.helperState.to
          }
          inputProps={{ name: "to", onChange: this.onChange }}
          margin="normal"
        />
        {this.props.displayDeleteBtn ? (
          <>
            {this.state.helperState.editEducation ? (
              <Button
                variant="contained"
                fullWidth={true}
                size="large"
                style={{ margin: ".6em 0 1.6em 0" }}
                onClick={this.updateEducation}
              >
                Update
              </Button>
            ) : (
              <Button
                variant="contained"
                fullWidth={true}
                size="large"
                style={{ margin: ".6em 0 1.6em 0" }}
                onClick={this.handleEdit}
              >
                Edit
              </Button>
            )}
            <Button
              variant="contained"
              fullWidth={true}
              size="large"
              style={{ margin: ".6em 0 1.6em 0" }}
              onClick={this.deleteEducation}
            >
              Delete
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            fullWidth={true}
            size="large"
            style={{ margin: ".6em 0 1.6em 0" }}
            onClick={this.addEducation}
          >
            Add
          </Button>
        )}
      </div>
    );
  }
}

export default Education;

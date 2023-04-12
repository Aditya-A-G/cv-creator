import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

export class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  addEducation = () => {
    console.log(this.state);
    this.props.addEducation(this.state);
  };
  deleteEducation = () => {
    this.props.deleteEducation(this.props.key);
  };

  render() {
    const { university, city, degree, subject, from, to } = this.props;

    return (
      <div>
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="University Name"
          value={!this.state.university ? university : this.state.university}
          inputProps={{ name: "university", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="City"
          value={!this.state.city ? city : this.state.city}
          inputProps={{ name: "city", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Degree"
          value={this.state.degree ? degree : this.state.degree}
          inputProps={{ name: "degree", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Subject"
          value={this.state.subject ? subject : this.state.subject}
          inputProps={{ name: "subject", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="From"
          value={this.state.from ? from : this.state.from}
          inputProps={{ name: "from", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="To"
          value={this.state.to ? to : this.state.to}
          inputProps={{ name: "to", onChange: this.onChange }}
          margin="normal"
        />
        {this.props.displayDeleteBtn ? (
          <Button
            variant="contained"
            fullWidth={true}
            size="large"
            style={{ margin: ".6em 0 1.6em 0" }}
            onClick={this.props.deleteEducation}
          >
            Delete
          </Button>
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

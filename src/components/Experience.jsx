import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
  }

  onChange = (e) => {
    if (this.props.displayDeleteBtn) {
      //do nothing
      console.log(e.target.name);
      console.log(e.target.value);
    } else {
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.name);
      console.log(e.target.value);
    }
  };
  addExperience = () => {
    console.log(this.state);
    this.props.addExperience(this.state);
  };
  deleteExperience = () => {
    this.props.deleteExperience(this.props.experienceKey);
  };

  render() {
    const { position, company, city, from, to } = this.props;
    return (
      <div>
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Position"
          value={!position ? this.state.position : position}
          inputProps={{ name: "position", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Company"
          value={!company ? this.state.company : company}
          inputProps={{ name: "company", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="City"
          value={!city ? this.state.city : city}
          inputProps={{ name: "city", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="From"
          value={!from ? this.state.from : from}
          inputProps={{ name: "from", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="To"
          value={!to ? this.state.to : to}
          inputProps={{ name: "to", onChange: this.onChange }}
          margin="normal"
        />
        {this.props.displayDeleteBtn ? (
          <>
            <Button
              variant="contained"
              fullWidth={true}
              size="large"
              style={{ margin: ".6em 0 .4em 0" }}
              // onClick={this.props.deleteExperience}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              fullWidth={true}
              size="large"
              style={{ margin: ".6em 0 2.4em 0" }}
              onClick={this.deleteExperience}
            >
              Delete
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            fullWidth={true}
            size="large"
            style={{ margin: ".6em 0 2.4em 0" }}
            onClick={this.addExperience}
          >
            Add
          </Button>
        )}
      </div>
    );
  }
}

export default Experience;

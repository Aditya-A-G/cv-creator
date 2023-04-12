import { Typography } from '@mui/material'
import React, { Component } from 'react'
import '../ResumeHeader.css'

export class ResumeHeader extends Component {

  render() {
    return (
      <div className='resumeHeader'>
        <Typography variant='h2'>
            {!this.props.firstName ? "[First Name]" : this.props.firstName} {" "} {!this.props.lastName ? "[Last Name]" : this.props.lastName}
        </Typography>
        <p>{!this.props.title ? "[Title]" : this.props.title}</p>
      </div>
    )
  }
}

export default ResumeHeader
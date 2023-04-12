import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export class Header extends Component {
  render() {
    return (
        <AppBar color="" position='static'>
            <Toolbar style={{justifyContent: "center", margin:"1em"}}>
                <Typography variant="h3" align='center'>
                    CV-CREATOR
                </Typography>
            </Toolbar>  
        </AppBar>
    )
  }
}

export default Header
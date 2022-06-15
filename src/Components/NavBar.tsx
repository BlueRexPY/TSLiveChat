import React from 'react'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LOGIN_ROUTE } from '../utils/consts';
import { logout } from '../utils/firebase';
type Props = {
  login:boolean
}


const NavBar = (props: Props) => {
  const login = props.login 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Typography color='secondary' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Live Chat
          </Typography>
          
          {
            login?
            (<Button className="link" variant="outlined" color="secondary" onClick={logout}>Logout</Button>)
            :
            (<Link  className="link" to={LOGIN_ROUTE}><Button variant="outlined" color="secondary">Login</Button></Link> )
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
import React from 'react'
import { Grid, Avatar, Typography, Button } from '@mui/material';
import lastUser from '../utils/store'
import { useNavigate } from 'react-router-dom';
type Props = {}

const UserInfo = (props: Props) => {
    const navigate = useNavigate()
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" width={"100%"} height={"90vh"}>
        <Grid container sx={{display:"flex", backgroundColor:"background.paper", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"10px",  width:"auto", padding:"40px",  height:"auto" }}>
            <Avatar src={lastUser.userInfo.photoLink} sx={{ width:"100px",height:"100px"}}/>
            <Typography color='text.primary' padding={"10px"} fontSize="34px">
            {lastUser.userInfo.name}
            </Typography>
            <Typography color='text.primary' padding={"10px"} fontSize="22px">
            {lastUser.userInfo.email}
            </Typography>
            <Button variant="outlined" color="secondary" size="large" onClick={()=>(navigate(`/chat`))}>back</Button>
        </Grid>

    </Grid>
  )
}

export default UserInfo
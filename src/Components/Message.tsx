import React from 'react'
import { Grid, Typography, Avatar } from '@mui/material';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import lastUser from '../utils/store'

type Props = {
    email: string,
    photoLink: string,
    text:string,
    name:string,
}

const Message = (props: Props) => {

    const [user, loading, error] = useAuthState(auth);
    const myMessage = props.email == user?.email? true:false
    const navigate =  useNavigate()
    const toUserInfo = () =>{
        lastUser.setUserInfo(props.email,props.photoLink,props.name)
        navigate(`/profile`)
    }

    return myMessage?
    (
        <Grid container sx={{display:"flex",margin:"10px", backgroundColor:"background.paper", justifyContent:"flex-end", alignContent:"flex-end", 
        alignItems:"flex-end",direction:"row", width:"93%",  height:"auto"}}>
          
            <Grid container sx={{display:"flex", backgroundColor:"background.secondary", borderRadius:"5px 0px 5px 5px",  width:"auto", maxWidth:"250px",  height:"auto"}} >
              <Typography color='text.primary' padding="10px" fontSize="12px" component="div"  noWrap={false} sx={{wordBreak:"break-all"}}> 
              {props.text}
              </Typography>
            </Grid>
        </Grid>
    )
    :
    (
        <Grid container sx={{display:"flex",margin:"10px", backgroundColor:"background.paper",direction:"row", 
        justifyContent:"flex-start", alignContent:"flex-start", 
        alignItems:"flex-start", width:"80%", maxWidth:"320px", height:"auto" }} >
            <div onClick={toUserInfo}>
            <Avatar src={props.photoLink}/>
            </div>
            
            <Grid container sx={{display:"flex", backgroundColor:"background.primary", borderRadius:"0 5px 5px 5px",  width:"auto", marginLeft:"10px", maxWidth:"250px",  height:"auto" }}>
              <Typography color='text.primary' padding={"10px"} fontSize="12px" noWrap={false} sx={{wordBreak:"break-all"}} component="div">
              {props.text}
              </Typography>
            </Grid>
        </Grid>
    )
}

export default Message
import { Button, Grid, Container, Typography, TextField, Avatar } from '@mui/material';
import React, { useCallback } from 'react'
import Message from './Message';
import { useState, useEffect } from 'react';
import { collection,addDoc,serverTimestamp,  query, orderBy, getDocs, QueryDocumentSnapshot, QuerySnapshot,DocumentData  } from "firebase/firestore";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, db } from '../utils/firebase';

type Props = {}

const Chat = (props: Props) => {

  const [value, setValue] = useState('')
  const [user, loadingUser, error] = useAuthState(auth);
  const [messages, setMessages] = useState<DocumentData[]>([])

  const sendMessage = (text:string) =>{
    if(text!=''){
      const newMessage = {
        createdAt: serverTimestamp(),
        email: user?.email,
        photoLink: user?.photoURL,
        text:text,
        name: user?.displayName,
      }
      addDoc(collection(db, "messages"), newMessage);
      setValue('')
    }else{
      setValue('')
    }
  }
  
  async function update() {
    const q = query(collection(db, 'messages'), orderBy("createdAt"));
    const querySnapshot: QuerySnapshot = await getDocs(q)
    const docs = querySnapshot.docs
    const messagesQ = docs.map((doc: QueryDocumentSnapshot) => doc.data())
    setMessages(messagesQ)
  }
  
  useEffect(() => {
    update()
  }, [messages])


  return (
    <Container>
      <Grid container direction="column" justifyContent="center" alignItems="center" width={"100%"} height={"90vh"}>
        <Grid container sx={{display:"flex",marginTop:"5px", backgroundColor:"background.paper", borderRadius:"5px", overflow: "auto"}} direction="column" justifyContent="flex-start" alignContent="flex-start" flexWrap="nowrap"
        alignItems="flex-start" width={"100%"} maxWidth={"370px"}  height={"80%"}>

        {
          messages?.map((item,key) =>{
            return(
              <Message key={key} email={item?.email} photoLink={item?.photoLink} text={item?.text} name={item?.name}/>
            )
          })
        }

        </Grid>
        <Grid container sx={{display:"flex",marginTop:"5px", backgroundColor:"background.paper", borderRadius:"5px"}} direction="row" justifyContent="space-evenly" 
        alignItems="center" width={"100%"} maxWidth={"370px"}  height={"100px"}>
          <TextField color='secondary' id="textForMessage" label="Type your message" variant="outlined" autoComplete='false' value={value} onChange={(e)=> setValue(e.target.value)}></TextField>
          <Button variant="outlined" color="secondary" size="large" onClick={()=>{sendMessage(value)}}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
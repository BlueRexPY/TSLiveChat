import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
type Props = {};

const Login = (props: Props) => {
  const GoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.user.displayName);
    const user = res.user;
  };

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        height={"600px"}
      >
        <Grid
          container
          sx={{
            display: "flex",
            backgroundColor: "background.paper",
            borderRadius: "5px",
          }}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          width={"80%"}
          maxWidth={"370px"}
          height={"200px"}
        >
          <Typography color="text.primary" variant="h4" component="div">
            Live Chat Login
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => GoogleLogin()}
          >
            Login with google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

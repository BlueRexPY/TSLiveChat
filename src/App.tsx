import "./Styles/Zero.css";
import "./Styles/App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { theme } from "./Styles/them";
import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./Components/AppRouter";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import { CircularProgress, Grid } from "@mui/material";

function App() {
  const [login, setLogin] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user != null) {
      setLogin(true);
    } else setLogin(false);
  }, [user]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {loading ? (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            width={"100%"}
            height={"90vh"}
          >
            <CircularProgress color="secondary" />
          </Grid>
        ) : (
          <>
            <NavBar login={login} />
            <AppRouter login={login} />
          </>
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

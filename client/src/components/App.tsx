import React, { useState } from "react";
import "../App.css";
import {
  createTheme,
  ThemeProvider,
  Container,
  Button,
  Drawer,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";

import Vacancies from "./Vacancies";
import DrawerMenu from "./DrawerMenu";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [drawerMenuState, setDrawerMenuState] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Button onClick={() => setDrawerMenuState(true)}>
        <MenuIcon onClick={() => setDrawerMenuState(true)} />
      </Button>
      <Drawer open={drawerMenuState} onClose={() => setDrawerMenuState(false)}>
        <DrawerMenu />
      </Drawer>
      <Container maxWidth="lg">
        <main>
          <Vacancies />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Applications from "./Applications";
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
      <Router>
        <Drawer
          open={drawerMenuState}
          onClose={() => setDrawerMenuState(false)}
        >
          <DrawerMenu />
        </Drawer>
        <Routes>
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

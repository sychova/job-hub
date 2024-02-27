import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Navigation from "./Navigation";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;

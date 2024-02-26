import React from "react";
import "../App.css";
import { createTheme, ThemeProvider, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Vacancies from "./Vacancies";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Vacancies />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

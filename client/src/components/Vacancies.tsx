import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Vacancy from "./Vacancy";

const API_BASE = "http://localhost:5000/";

export default function Vacancies() {
  const [vacancies, setVacancies] = useState([]);

  const getVacancies = async () => {
    try {
      const response = await fetch(API_BASE + "vacancies", {
        method: "GET",
      });

      const data = await response.json();
      setVacancies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVacancies();
  }, []);

  return (
    <Grid container spacing={4}>
      {vacancies.map((vacancy: any) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} />
      ))}
    </Grid>
  );
}

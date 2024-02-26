import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Vacancy from "./Vacancy";

export default function Vacancies() {
  const [vacancies, setVacancies] = useState([]);

  const handleGetVacancies = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "vacancies",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setVacancies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetVacancies();
  }, []);

  return (
    <Grid container spacing={4}>
      {vacancies.map((vacancy: any) => (
        <Vacancy
          key={vacancy.id}
          vacancy={vacancy}
          handleGetVacancies={handleGetVacancies}
        />
      ))}
    </Grid>
  );
}

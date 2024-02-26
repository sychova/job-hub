import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Vacancy from "./Vacancy";

// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

// function createData(id: number, title: string, description: string) {
//   return { id, title, description };
// }

// const vacancies = [
//   createData(
//     0,
//     "Node.js developer",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   ),
//   createData(
//     1,
//     "C# developer",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   ),
//   createData(
//     2,
//     "Python developer",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   ),
//   createData(
//     3,
//     "Rubi developer",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   ),
//   createData(
//     4,
//     "Java developer",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   ),
// ];

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
      {vacancies.map((vacancy) => (
        <Vacancy vacancy={vacancy} />
      ))}
    </Grid>
  );
}

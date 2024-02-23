import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

function createData(id: number, title: string, description: string) {
  return { id, title, description };
}

const rows = [
  createData(0, "Node.js developer", "Node.js developer"),
  createData(1, "C# developer", "C# developer"),
  createData(2, "Python developer", "Python developer"),
  createData(3, "Rubi developer", "Rubi developer"),
  createData(4, "Java developer", "Java developer"),
];

// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

export default function Vacancies() {
  return (
    <React.Fragment>
      <Title>Vacancies list</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more vacancies
      </Link> */}
    </React.Fragment>
  );
}

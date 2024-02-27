import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Typography,
} from "@mui/material";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  const handleGetApplications = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "applications",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setApplications(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetApplications();
  }, []);

  return (
    <Container>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Applications
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Vacancy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((application: any) => (
            <TableRow key={application.id}>
              <TableCell>{application.email}</TableCell>
              <TableCell align="right">{application.vacancy.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

import React, { useState } from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import Application from "./Application";

// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

export default function Vacancy({ vacancy, handleGetVacancies }: any) {
  const [applicationModalState, setApplicationModalState] = useState(false);

  return (
    <Grid item xs={2} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {vacancy.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Current applicants: {vacancy.applications.length}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {vacancy.description}
            </Typography>
            <Button
              onClick={() => setApplicationModalState(true)}
              color="primary"
            >
              Apply now!
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={vacancy.logo}
            alt={vacancy.title}
          />
        </Card>
      </CardActionArea>
      {applicationModalState && (
        <Application
          open={applicationModalState}
          onClose={() => setApplicationModalState(false)}
          vacancyId={vacancy.id}
          handleGetVacancies={handleGetVacancies}
        />
      )}
    </Grid>
  );
}

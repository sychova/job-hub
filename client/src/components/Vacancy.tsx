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
import JobApplication from "./JobApplication";

// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

export default function Vacancy({ vacancy }: { vacancy: any }) {
  const [jobApplicationModalState, setJobApplicationModalState] =
    useState(false);

  return (
    <Grid item xs={2} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {vacancy.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Current applicants: X
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {vacancy.description}
            </Typography>
            <Button
              onClick={() => setJobApplicationModalState(true)}
              color="primary"
            >
              Apply now!
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={`/vacancy-stub.jpg`}
            alt={vacancy.imageLabel}
          />
        </Card>
      </CardActionArea>
      {jobApplicationModalState && (
        <JobApplication
          open={jobApplicationModalState}
          onClose={() => setJobApplicationModalState(false)}
        />
      )}
    </Grid>
  );
}

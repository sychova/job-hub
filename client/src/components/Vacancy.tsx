import * as React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

export default function Vacancy({ vacancy }: { vacancy: any }) {
  return (
    <Grid item xs={2} md={6}>
      <CardActionArea component="a" href="#">
        <Card key={vacancy.id} sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {vacancy.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Lorem ipsum
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {vacancy.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Apply now!
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={vacancy.image}
            alt={vacancy.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

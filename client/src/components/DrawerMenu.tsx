import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";

export default function DrawerMenu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem
          key={0}
          disablePadding
          onClick={() => {
            navigate("/vacancies");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Vacancies"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          key={1}
          disablePadding
          onClick={() => {
            navigate("/applications");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Applications"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

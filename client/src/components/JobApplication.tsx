import * as React from "react";
import { TextField, Box, Typography, Modal, Button } from "@mui/material";

// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

export default function JobApplication({ onClose, open }: any) {
  const handleApplication = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "vacancies/apply",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Submit your email
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="text"
          label="Email"
          name="text"
          autoFocus
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => {
            handleApplication();
            onClose();
          }}
        >
          Apply
        </Button>
      </Box>
    </Modal>
  );
}

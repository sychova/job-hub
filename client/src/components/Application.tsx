import React, { useState } from "react";
import { TextField, Box, Typography, Modal, Button } from "@mui/material";

export default function Application({
  open,
  onClose,
  vacancyId,
  handleGetVacancies,
}: any) {
  const [applicationEmail, setApplicationEmail] = useState("");

  const handleApplication = async (vacancyId: number) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vacancy: vacancyId, email: applicationEmail }),
        }
      );

      const data = await response.json();
      setApplicationEmail("");
      handleGetVacancies();
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
          value={applicationEmail}
          onChange={(e) => setApplicationEmail(e.target.value)}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => {
            handleApplication(vacancyId);
            onClose();
          }}
        >
          Apply
        </Button>
      </Box>
    </Modal>
  );
}

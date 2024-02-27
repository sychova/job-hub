import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Modal,
  Button,
  Alert,
} from "@mui/material";

export default function Application({
  open,
  onClose,
  vacancyId,
  handleGetVacancies,
}: any) {
  const [applicationEmail, setApplicationEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplication = async (e: any, onClose: any, vacancyId: number) => {
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

      const { error } = await response.json();

      if (error) {
        setErrorMessage(error);
        return;
      }

      setApplicationEmail("");
      handleGetVacancies();
      onClose();
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
        {errorMessage.length > 0 && (
          <Alert
            severity="error"
            onClick={() => {
              setErrorMessage("");
            }}
          >
            {errorMessage}
          </Alert>
        )}
        <Button
          disabled={applicationEmail.length === 0 ? true : false}
          size="large"
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleApplication(e, onClose, vacancyId);
          }}
        >
          Apply
        </Button>
      </Box>
    </Modal>
  );
}

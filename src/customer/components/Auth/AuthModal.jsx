import { Button } from "@headlessui/react";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import RegistrationForm from "./RegistrationForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({open, handleClose}) => {
  const location = useLocation();
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm /> :   <RegistrationForm />}
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;

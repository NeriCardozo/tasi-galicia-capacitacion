import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useStoreModal } from "@/store/useStoreModal";
import styles from "/styles/Modal.module.css";

const ModalBox = () => {
  const { setInitialState, active, title, message, buttons, width } = useStoreModal();
  const handleClose = () => {
    setInitialState();
  };
  return (
    <>
      <Modal open={active.isActive} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {width},
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex-column",
            justifyContent: "space-around"
          }}
        >
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {message}
          </Typography>
          <div className={styles["buttons_modal"]}>
            {buttons?.map((button) => {
              return (
                <Button sx={{
                  marginRight: "10px"
                }} onClick={button.onClick} variant="contained">
                  {button.label}
                </Button>
              );
            })}
            </div>
        </Box>
      </Modal>
    </>
  );
};
export default ModalBox;

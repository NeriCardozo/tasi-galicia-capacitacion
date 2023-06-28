import React, { useState } from "react";
import { Container, Button, Grid, Paper, Typography } from "@mui/material";
import { useStore } from "@/store/useStore";
import { useRedirect } from "@/hooks/useRedirect";
import { useStoreModal } from "@/store/useStoreModal";
import ModalBox from "../../components/modal";
import { CancelButton } from "@/components/cancelButton";
import { HomeButton } from "@/components/homeButton";

const Operations = () => {
  const { user } = useStore();
  const { handleRedirect }: any = useRedirect();
  const { setMessage, setButtons, setTitle, setActive, setInitialState } =
    useStoreModal();

  const handleClose = () => {
    setInitialState();
    setActive({ isActive: false });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Bienvenido {user.name}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        ¿Qué operación deseas realizar?
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Paper elevation={0} sx={{ padding: "1rem", textAlign: "center" }}>
            <Button
              onClick={() => {
                handleRedirect("/extractions");
              }}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#a6a6a6" }}
            >
              Extracción
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={0} sx={{ padding: "1rem", textAlign: "center" }}>
            <Button
              onClick={() => {
                handleRedirect("/deposit");
              }}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#a6a6a6" }}
            >
              Depósito
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} sx={{ padding: "1rem", textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => {
                handleRedirect("/balance");
              }}
              fullWidth
              sx={{ backgroundColor: "#a6a6a6" }}
            >
              Consulta de saldo
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <CancelButton />
        </Grid>
      </Grid>
      <ModalBox />
    </Container>
  );
};
export default Operations;

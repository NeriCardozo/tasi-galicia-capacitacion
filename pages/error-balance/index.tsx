import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useRedirect } from "@/hooks/useRedirect";

const ErrorSaldoInsuficiente = () => {
  const { handleRedirect } = useRedirect();

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography variant="h6" gutterBottom>
        Su saldo es insuficiente. Puede consultar su saldo, probar con otro
        monto o cancelar la operación.
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}
      >
        <Button
          variant="contained"
          sx={{ marginRight: "1rem" }}
          onClick={() => {
            handleRedirect("/cancel");
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "1rem" }}
          onClick={() => {
            handleRedirect("/balance");
          }}
        >
          Consultar saldo
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleRedirect("/other-amount", true);
          }}
        >
          Otro monto
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorSaldoInsuficiente;

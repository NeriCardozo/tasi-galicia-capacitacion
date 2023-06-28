import React from "react";
import { Container, Button, Grid, Paper, Typography } from "@mui/material";
import { useStore } from "@/store/useStore";
import { useRedirect } from "@/hooks/useRedirect";

const Balance = () => {
  const { user } = useStore();
  const saldo = user.balance;
  const { handleRedirect }: any = useRedirect();

  const values = [{bill: 100, qty: 0},{bill: 200, qty: 0},{bill: 500, qty: 0} ];

  for (const i of values) {
    if(i.bill === 100){
      i.qty = 5;
    }else if(i.bill === 200){
      i.qty = 4;
    }
  }
  console.log(values)

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Su saldo es
      </Typography>
      <Typography variant="h2" align="center">
        ${saldo}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        ¿Desea realizar otra operación?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={4}>
          <Paper sx={{ padding: "1rem", textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => {
                handleRedirect("/operations");
              }}
              fullWidth
            >
              Si
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper sx={{ padding: "1rem", textAlign: "center" }}>
            <Button onClick={() => handleRedirect("/", true)}>No</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Balance;

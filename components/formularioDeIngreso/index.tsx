import { Grid, TextField } from "@mui/material";
import { useStoreLogin } from "@/store/useStoreLogin";
import React from "react";

export const FormularioDeIngreso = () => {
  const { fields, setFocusedInput } = useStoreLogin();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Ingrese DNI y Clave
      </Grid>
      <Grid item xs={12}>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          name="dni"
          value={fields?.dni}
          id="outlined-basic"
          label="DNI"
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          name="clave"
          value={fields?.clave}
          id="outlined-basic"
          label="Clave"
          variant="outlined"
        ></TextField>
      </Grid>
    </Grid>
  );
};

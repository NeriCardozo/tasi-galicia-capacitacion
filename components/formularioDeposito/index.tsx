import { Grid, TextField } from "@mui/material";
import React from "react";
import { useStoreDeposit } from "@/store/useStoreDeposit";
import styles from "/styles/DepositForm.module.css";

export const FormularioDeposito = () => {
  const { fields, setFocusedInput } = useStoreDeposit();

  return (
    <Grid container className={styles.containerFlex}>
      <Grid item className={styles.itemRow}>
        <h5 className={styles.titlePesos}>PESOS</h5>
        <h5 className={styles.titleCantidad}>CANTIDAD</h5>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$100</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto100}
          name="monto100"
          variant="outlined"
          placeholder="0"
          defaultValue="Default Value"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$200</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto200}
          name="monto200"
          variant="outlined"
          placeholder="0"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$500</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto500}
          name="monto500"
          variant="outlined"
          placeholder="0"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$1000</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto1000}
          name="monto1000"
          variant="outlined"
          placeholder="0"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>
    </Grid>
  );
};

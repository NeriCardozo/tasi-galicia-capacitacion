import { Grid, TextField } from "@mui/material";
import React from "react";
import { useStoreDeposit } from "@/store/useStoreDeposit2";
import styles from "/styles/DepositForm.module.css";

export const FormularioDeposito = () => {
  const { fields, setFocusedInput } = useStoreDeposit();

  return (
    <>
    <Grid container className={styles.containerFlex}>
      <Grid item className={styles.itemRow}>
        <h5 className={styles.titlePesos}>PESOS</h5>
        <h5 className={styles.titleCantidad}>CANTIDAD</h5>
      </Grid>

    {fields.map((e, key)=>{
      return(
        <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>${fields[key].bill}</h5>
        <TextField
        onFocus={(e) => setFocusedInput(e?.target?.name)}
        value={e.qty}
        name={e.bill}
        variant="outlined"
        placeholder="0"
        defaultValue="Default Value"
        id="outlined-basic"
        className={styles.inputsTxt}
        ></TextField>
        </Grid>
        )
      })}
    
    </Grid>
    </>
  );
};

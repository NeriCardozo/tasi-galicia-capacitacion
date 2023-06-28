import React, { useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import { NumericKeyboard } from "@/components";
import { useStoreDeposit } from "@/store/useStoreDeposit";
import { useStore } from "@/store/useStore";
import styles from "/styles/Deposit.module.css";
import { FormularioDeposito } from "@/components/formularioDeposito";
import { useStoreModal } from "@/store/useStoreModal";
import ModalBox from "@/components/modal";
import { CancelButton } from "@/components/cancelButton";
import { HomeButton } from "@/components/homeButton";

const Deposit = () => {
  const {
    fields,
    setFields,
    depositAmount,
    setDepositAmount,
    focusedInput,
    disabledButton,
    setInitialState,
  } = useStoreDeposit();
  const {
    setMessage,
    setButtons,
    setTitle,
    setActive,
    setInitialState: setInitialStateModal,
  } = useStoreModal();
  const { user } = useStore();

  useEffect(() => {
    let n = 0;
    n += fields.monto100 * 100;
    n += fields.monto200 * 200;
    n += fields.monto500 * 500;
    n += fields.monto1000 * 1000;
    setDepositAmount(n);
  }, [fields]);

  function handleDelete(): void {
    setInitialState();
  }

  const handleOnChange = (value: number) => {
    setFields({ ...fields, [focusedInput]: fields[focusedInput] + value });
  };
  const handleClose = () => {
    setInitialState();
    setActive({ isActive: false });
  };

  const handleSubmit = () => {
    if (depositAmount === 0) {
      setTitle("");
      setMessage("Por favor, seleccione un monto.");
      setButtons([
        {
          label: "Ok",
          onClick: () => {
            setInitialStateModal();
          },
        },
      ]);
      setActive({ isActive: true });
    } else {
      user.balance += depositAmount;
      setTitle(
        "Su depósito de monto $" +
          depositAmount +
          " en la cuenta N°" +
          user.accountNumber +
          " fue realizado con éxito. Su nuevo saldo es de $" +
          user.balance
      );
      setMessage("");
      setButtons([
        {
          label: "OK",
          onClick: () => {
            handleClose();
          },
        },
      ]);
      setActive({ isActive: true });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Container>
          <h1 className={styles.titleDeposito}>Depósito</h1>
          <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={6}>
              <FormularioDeposito />
            </Grid>

            <Grid item xs={6}>
              <h2 className={styles.titleDeposito}>Monto a depositar</h2>
              <h2 className={styles.titleDeposito}>${depositAmount}</h2>
              <NumericKeyboard
                handleOnDelete={handleDelete}
                handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
                disabledButtonContinuar={disabledButton}
              />
            </Grid>
              <Grid className={styles.footerButtons} item xs={3}>
                <div className={styles.cancelButton}>
                  <CancelButton/>
                  </div>
              </Grid>
              <Grid item xs={3}>
              <div className={styles.homeButton}>
                  <HomeButton />
                  </div>
              </Grid>
          </Grid>
        </Container>
        <ModalBox />
      </div>
    </>
  );
};

export default Deposit;

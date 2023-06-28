import { useRedirect } from "@/hooks/useRedirect";
import { NumericKeyboard } from "@/components/tecladoNumerico";
import { useStore } from "@/store/useStore";
import { useStoreExtraction } from "@/store/useStoreExtraction";
import ModalBox from "@/components/modal";
import { Button, Container, Grid, Typography, Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import { useStoreModal } from "@/store/useStoreModal";
import styles from "/styles/OtherAmount.module.css";

const OtherAmount = () => {
  const { user } = useStore();
  const { extraction, setExtraction, setInitialState } = useStoreExtraction();
  const { handleRedirect } = useRedirect();
  var disabledButton;

  useEffect(() => {
    if (extraction.value == "0") {
      disabledButton = true;
    } else {
      disabledButton = false;
    }
  }, [extraction]);

  const { setMessage, setButtons, setTitle, setActive } = useStoreModal();

  function handleOnDelete(): void {
    setInitialState();
  }
  const handleSuccess = () => {
    setTitle(
      "Su extracción de monto $" +
        extraction.value +
        " en la cuenta N°" +
        user.accountNumber +
        " fue realizado con éxito."
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
  };
  const handleInsufficientAmmount = () => {
    setTitle(
      "Su saldo es insuficiente. Puede consultar su saldo, probar con otro monto o cancelar la operación."
    );
    setMessage("");
    setButtons([
      {
        label: "Cancelar",
        onClick: () => {
          handleRedirect("/cancel");
        },
      },
      {
        label: "Consultar saldo",
        onClick: () => {
          handleRedirect("/balance");
        },
      },
      {
        label: "Otro monto",
        onClick: () => {
          handleRedirect("/other-amount");
        },
      },
    ]);
    setActive({ isActive: true });
  };

  function handleSubmit(): void {
    if (
      parseInt(extraction.value) <= user.balance &&
      parseInt(extraction.value) !== 0
    ) {
      user.balance = user.balance - parseInt(extraction.value);
      handleSuccess();
    } else {
      handleInsufficientAmmount();
    }
  }

  function handleOnChange(value: number): void {
    let prevValue = extraction.value;
    if (prevValue === "0") {
      setExtraction({ ...{ value: value.toString() } });
    } else {
      setExtraction({ ...{ value: prevValue + value } });
    }
  }

  function handleCancel(): void {
    setTitle("¿Está seguro que desea cancelar?");
    setMessage("Presione 'Sí' para cancelar y 'No' para volver al menú.");
    setButtons([
      {
        label: "Si",
        onClick: () => {
          handleRedirect("/cancel", true);
        },
      },
      {
        label: "No",
        onClick: () => {
          handleClose();
        },
      },
    ]);
    setActive({ isActive: true });
  }
  const handleClose = () => {
    setInitialState();
    setActive({ isActive: false });
  };


  return (
    <>
      <Container>
        <h1 className={styles.otherAmountTitle}>Otro monto</h1>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} md={10}>
            <div className={styles.extractionValue}>
            <Typography className={styles.extractionNumber}>${extraction.value}</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.cancelButton}>
            <Button onClick={() => handleCancel()} variant="contained">
              Cancelar
            </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
            <NumericKeyboard
              handleOnDelete={handleOnDelete}
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              disabledButtonContinuar={disabledButton}
              />
            </div>
          </Grid>
        </Grid>
        <ModalBox />
      </Container>
    </>
  );
};

export default OtherAmount;

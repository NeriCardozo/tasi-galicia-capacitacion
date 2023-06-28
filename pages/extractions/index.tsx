import React from "react";
import { Button, Typography, Container, Grid, Paper } from "@mui/material";
import { useStoreExtraction } from "@/store/useStoreExtraction";
import { useStore } from "@/store/useStore";
import { useRedirect } from "@/hooks/useRedirect";
import ModalBox from "@/components/modal";
import { useStoreModal } from "@/store/useStoreModal";
import { CancelButton } from "@/components/cancelButton";
import { HomeButton } from "@/components/homeButton";

const Extractions = () => {
  const { user } = useStore();
  const { extraction, setExtraction } = useStoreExtraction();
  const { setMessage, setButtons, setTitle, setActive, setInitialState } =
    useStoreModal();

  const numbers = [500, 2000, 3000, 5000, 6000, 0];

  const { handleRedirect }: any = useRedirect();

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
  const handleSuccess = () => {
    setTitle(
      "Su extracción de monto $" +
        extraction.value +
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
  };

  const handleClose = () => {
    setInitialState();
    setActive({ isActive: false });
  };
  const handleConfirm = () => {
    handleRedirect("/cancel");
  };

  const handleCancel = () => {
    setTitle("¿Está seguro que desea cancelar?");
    setMessage("Presione 'Sí' para cancelar y 'No' para volver al menú.");
    setButtons([
      {
        label: "Si",
        onClick: () => {
          handleConfirm();
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
  };

  const handleContinue = () => {
    if (parseInt(extraction.value) === 0) {
      handleRedirect("/other-amount");
    } else if (
      parseInt(extraction.value) <= user.balance &&
      parseInt(extraction.value) !== 0
    ) {
      user.balance = user.balance - parseInt(extraction.value);
      handleSuccess();
    } else {
      handleInsufficientAmmount();
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Extraccion
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              {numbers.slice(0, 3).map((number) => (
                <Grid container alignItems="center" key={number}>
                  <Grid item xs={2}>
                    <input
                      onChange={({ target }) =>
                        setExtraction({ value: number })
                      }
                      type="radio"
                      name="deposit"
                      id={`deposit${number}`}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <label htmlFor={`deposit${number}`}>${number}</label>
                  </Grid>
                </Grid>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ p: 2 }}>
              {numbers.slice(3).map((number) => (
                <Grid container alignItems="center" key={number}>
                  <Grid item xs={2}>
                    <input
                      onChange={({ target }) =>
                        setExtraction({ value: number })
                      }
                      type="radio"
                      name="deposit"
                      id={`deposit${number}`}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    {number === 0 ? (
                      <label htmlFor={`deposit${number}`}>Otro monto</label>
                    ) : (
                      <label htmlFor={`deposit${number}`}>${number}</label>
                    )}
                  </Grid>
                </Grid>
              ))}
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          sx={{ marginTop: "2rem" }}
        >
          <CancelButton />
          <HomeButton />
          <Paper elevation={0} sx={{ padding: "1rem" }}>
          <Button
            onClick={() => {
              handleContinue();
            }}
            variant="contained"
            >
            Continuar
          </Button>
          </Paper>
        </Grid>
      </Container>
      <ModalBox />
    </>
  );
};

export default Extractions;

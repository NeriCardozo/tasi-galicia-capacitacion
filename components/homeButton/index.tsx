import { Button, Paper } from "@mui/material";
import { useRedirect } from "@/hooks/useRedirect";
import { useStoreModal } from "@/store/useStoreModal";
import { useStoreDeposit } from "@/store/useStoreDeposit";
import React from "react";

export const HomeButton = () => {
  const { setMessage, setButtons, setTitle, setActive, setInitialState } =
    useStoreModal();
  const { setInitialState: setInitialStateDeposit } = useStoreDeposit();

  const { handleRedirect }: any = useRedirect();

  const handleCancel = () => {
    setTitle("¿Está seguro que desea volver al inicio?");
    setMessage("Presione 'Ok' para volver y 'No' para cerrar este mensaje.");
    setButtons([
      {
        label: "Ok",
        onClick: () => {
          handleClick();
        },
      },
      {
        label: "No",
        onClick: () => {
          setInitialState();
        },
      },
    ]);
    setActive({ isActive: true });
  };

  const handleClick = () => {
    setInitialState();
    setInitialStateDeposit();
    setActive({ isActive: false });
    handleRedirect("/operations");
  };

  return (
    <Paper elevation={0} sx={{ padding: "1rem" }}>
      <Button onClick={() => handleCancel()} variant="contained">
        Volver al inicio
      </Button>
    </Paper>
  );
};

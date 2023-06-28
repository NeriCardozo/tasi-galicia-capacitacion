import { Button, Paper } from "@mui/material";
import { useRedirect } from "@/hooks/useRedirect";
import { useStoreModal } from "@/store/useStoreModal";
import React from "react";

export const CancelButton = () => {
  const { setMessage, setButtons, setTitle, setActive, setInitialState } =
    useStoreModal();

  const { handleRedirect }: any = useRedirect();

  const handleCancel = () => {
    setTitle("¿Está seguro que desea cancelar?");
    setMessage("Presione 'Sí' para cancelar y 'No' para volver al menú.");
    setButtons([
      {
        label: "Si",
        onClick: () => {
          handleRedirect("/cancel");
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

  const handleClose = () => {
    setInitialState();
  };

  return (
    <Paper elevation={0} sx={{ padding: "1rem" }}>
      <Button onClick={() => handleCancel()} variant="contained">
        Cancelar
      </Button>
    </Paper>
  );
};

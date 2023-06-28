import { Button, Container, Grid } from "@mui/material";
import styles from "/styles/NumericKeyboard.module.css";

import React, { FC } from "react";

interface INumericKeyboard {
  disabledButtonContinuar?: Boolean;
  handleOnChange: (value: number) => void;
  handleSubmit: () => void;
  handleOnDelete: () => void;
}

export function NumericKeyboard({
  disabledButtonContinuar = false,
  handleOnDelete,
  handleOnChange,
  handleSubmit,
}: INumericKeyboard) {
  const keyboardItems = [];

  for (let i = 1; i <= 12; i++) {
    switch (i) {
      case 10:
        keyboardItems.push({
          name: "borrar",
          onClick: () => handleOnDelete(),
        });
        break;
      case 11:
        keyboardItems.push({
          name: 0,
          onClick: () => handleOnChange(0),
        });
        break;
      case 12:
        keyboardItems.push({
          name: "continuar",
          onClick: () => handleSubmit(),
          disabled: disabledButtonContinuar,
        });
        break;

      default:
        keyboardItems.push({
          name: i,
          onClick: () => handleOnChange(i),
        });
        break;
    }
  }

  return (
    <Container>
      <Grid
        className={styles.containerTecladoDeposito}
        container
        rowSpacing={1}
      >
        {keyboardItems.map((i, key) => {
          return (
            <Grid key={key} item xs={4}>
              <Button
                className={styles.btns}
                disabled={i?.disabled ? i.disabled : false}
                variant={"contained"}
                onClick={() => {
                  i.onClick();
                }}
              >
                {i.name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

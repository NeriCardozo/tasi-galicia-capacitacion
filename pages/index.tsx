import { Button, Container, Grid } from "@mui/material";
import { FormularioDeIngreso, NumericKeyboard } from "@/components";
import { useStoreLogin } from "@/store/useStoreLogin";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUsers } from "@/services";
import { useStore } from "@/store/useStore";
import ModalBox from "@/components/modal";

export default function Home() {
  const { disabledButton, fields, setFields, focusedInput, setDisabledButton } =
    useStoreLogin();
  const { setUser } = useStore();

  const handleOnChange = (value: string) => {
    setFields({ ...fields, [focusedInput]: fields[focusedInput] + value });
  };


  useEffect(() => {
    if (fields.dni.length == 8 && fields.clave.length == 4) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [fields]);

  const router = useRouter();

  const handleOnDelete = () => {
    setFields({ dni: "", clave: "" });
  };

  const handleSubmit = async () => {
    const users = await getUsers();
    if (users?.length > 0) {
      let currentUser = users.filter((user) => user.dni === fields.dni);
      if (currentUser.length > 0 && currentUser[0].clave === fields.clave){
        router.push("/operations");
        setUser(currentUser[0]);
      }else {
      alert("Datos incorrectos")
    }
  }};

  function handleFillUser(){
      setFields({
        dni: "12345678",
        clave: "1235"
      })
  }

  return (
    <>
      <Container>
        <h1>Cajero Automático TASI</h1>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          >
          <Grid item xs={6}>
            <FormularioDeIngreso />
          </Grid>
          <Grid item xs={6}>
            <NumericKeyboard
              handleOnDelete={handleOnDelete}
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              disabledButtonContinuar={disabledButton}
              />
          </Grid>
          <Grid item xs={12}>
            <Button
            onClick={()=> handleFillUser()}>
              Completar usuario
            </Button>
          </Grid>
        </Grid>
        <ModalBox />
      </Container>
    </>
  );
}
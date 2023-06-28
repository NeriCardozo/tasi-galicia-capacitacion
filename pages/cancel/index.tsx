import { useTimeout } from "@/hooks/useTimeout";
import React from "react";
import { useStoreModal } from "@/store/useStoreModal";
import ModalBox from "@/components/modal";

const Cancel = () => {
  useTimeout({
    timer: 5000,
  });

  return <h1> La operación ha sido cancelada.</h1>;
};

export default Cancel;

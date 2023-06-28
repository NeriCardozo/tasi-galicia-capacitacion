import React, { useEffect } from "react";
import { useRedirect } from "./useRedirect";

export const useTimeout = ({ timer }: any) => {
  const { handleRedirect } = useRedirect();

  useEffect(() => {
    const time = setTimeout(() => {
      handleRedirect("/", true);
    }, timer);
    return () => clearTimeout(time);
  }, []);
};

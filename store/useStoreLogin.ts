import { create } from "zustand";



interface IFields {
  dni?: string;
  clave?: string;
}

interface IStoreLogin {
  fields: IFields;
  disabledButton: boolean;
  focusedInput: string;
  setFields: (values: IFields) => void;
  setDisabledButton: (value: boolean) => void;
  setFocusedInput: (value: string) => void;
  setInitialState: () => void;
}

const initialState = {
  fields: {
    dni: "",
    clave: "",
  },
  focusedInput: "",
  disabledButton: false,
};

export const useStoreLogin = create<IStoreLogin>((set) => ({
  ...initialState,
  setFields: (values) => set((state) => ({ ...state, fields: values })),
  setDisabledButton: (value) =>
    set((state) => ({ ...state, disabledButton: value })),
  setFocusedInput: (value) =>
    set((state) => ({ ...state, focusedInput: value })),
    setInitialState: () => set((state) =>({ ...state, ...initialState}) )
}));

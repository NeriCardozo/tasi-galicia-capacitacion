import { create } from "zustand";

interface IFields {
  monto100?: any;
  monto200?: any;
  monto500?: any;
  monto1000?: any;
}

interface IStore {
  fields: IFields;
  depositAmount: number;
  disabledButton: boolean;
  focusedInput: string;
  setFields: (values: IFields) => void;
  setDepositAmount: (value: number) => void;
  setFocusedInput: (values: string) => void
  setDisabledButton: (values: boolean) => void
  setInitialState: () => void;
}

const initialState = {
  fields: {
      monto100: "",
      monto200: "",
      monto500: "",
      monto1000: "",
  },
  depositAmount: 0,
  disabledButton: false
};




export const useStoreDeposit = create<IStore>((set) => ({
  ...initialState,
  setFields: (values) => set((state) => ({ ...state, fields: values })),
  setDepositAmount: (values) => set((state) => ({ ...state, depositAmount: values })),
  setFocusedInput: (values) => set((state) => ({ ...state, focusedInput: values })),
  setInitialState: () => set((state) =>({ ...state, ...initialState})),
  setDisabledButton: (values) => set((state) => ({ ...state, disabledButton: values }))
}))
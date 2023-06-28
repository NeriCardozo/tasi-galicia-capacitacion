import { create } from "zustand";

interface IFields {
  bill: number,
  qty: number
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
  fields: [
    {bill: 100, qty: 0},
    {bill: 200, qty: 0},
    {bill: 500, qty: 0},
    {bill: 1000, qty: 0},
  ],
  depositAmount: 0,
  disabledButton: false,
  focusedInput: "",
};




export const useStoreDeposit = create<IStore>((set) => ({
  ...initialState,
  setFields: (values) => set((state) => ({ ...state, fields: values })),
  setDepositAmount: (values) => set((state) => ({ ...state, depositAmount: values })),
  setFocusedInput: (values) => set((state) => ({ ...state, focusedInput: values })),
  setInitialState: () => set((state) =>({ ...state, ...initialState})),
  setDisabledButton: (values) => set((state) => ({ ...state, disabledButton: values }))
}))
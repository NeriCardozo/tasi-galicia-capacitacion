import { create } from "zustand";

interface IExtraction {
value: string
}

interface IStore {
    extraction: IExtraction,
    openModal: boolean,
    setExtraction: (values: IExtraction) => void,
    setInitialState: () => void,
    setOpenModal: (value: boolean) => void,
}


const initialState = {
extraction:{
    value: "0",
    isOtherAmount: false
    },
openModal: false
  };

  export const useStoreExtraction = create<IStore>((set) => ({
    ...initialState,
    setExtraction: (values) => set((state) => ({ ...state, extraction: values })),
    setInitialState: () => set((state) =>({ ...state, ...initialState})),
    setOpenModal : (value) => set((state) => ({...state, openModal: value}))
  }));

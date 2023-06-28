import { create } from "zustand";

interface IUser {
    id: number,
    name: string,
    clave: string,
    dni: string,
    balance: number,
    accountNumber: string
}

interface IStore {
    user: IUser,
    setUser: (values: IUser) => void,
    setInitialState: () => void,

}


const initialState = {
    user : {
    id: 0,
    name: "",
    clave: "",
    dni: "",
    balance: 0,
    accountNumber: ""
    }

  };

  export const useStore = create<IStore>((set) => ({
    ...initialState,
    setUser: (values) => set((state) => ({ ...state, user: values })),
    setInitialState: () => set((state) =>({ ...state, ...initialState}) )
}));

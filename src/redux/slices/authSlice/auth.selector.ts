import { RootState } from "../../store"

export const logIn = (state: RootState) => state.auth.logIn

export const user = (state: RootState) => state.auth.user
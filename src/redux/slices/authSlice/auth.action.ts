import { IUser } from "../../../global/interface"
import { AppDispatch } from "../../store"
import { authSlice } from "./auth.slice"


export const pressLogin = (isPressed: boolean) => (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.pressLogIn(isPressed))
}

export const setUser = (user: IUser) => (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.setUser(user))
}
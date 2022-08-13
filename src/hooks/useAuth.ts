import { useHistory } from "react-router-dom"

import { IUser } from "../global/interface"
import { authSlice } from "../redux/slices/authSlice/auth.slice"
import { useAppDispatch } from "../redux/store"
import Storage from "../services/storage.service"

const useAuth = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const signIn = (user: IUser) => {
        Storage.setItem('user', JSON.stringify(user))
        dispatch(authSlice.actions.setUser(user))
    }

    const logOut = () => {
        Storage.clearStorage()
        dispatch(authSlice.actions.setUser({}))
        history.push('/')

    }

    return {
        signIn,
        logOut
    }
}

export default useAuth
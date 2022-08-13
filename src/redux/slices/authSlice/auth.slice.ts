import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../global/interface';
import Storage from '../../../services/storage.service';

interface IinitialState {
    logIn: boolean,
    user: IUser,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logIn: false,
        user:  JSON.parse(Storage.getItem('user') || "{}")
    } as IinitialState,
    reducers: {
        pressLogIn(state, action) {
            state.logIn = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        }
    }
})
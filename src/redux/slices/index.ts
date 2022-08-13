import { authReducer } from './authSlice';
import {assetsReducer} from './assetsSlice'

export const reducer = {
    auth: authReducer,
    assets: assetsReducer
};

import { authSelectors } from '../redux/slices/authSlice';
import { pressLogin } from '../redux/slices/authSlice/auth.action';
import { useAppDispatch, useAppSelector } from '../redux/store';
import useAuth from './useAuth';

const useNavigation = () => {
    const { logOut } = useAuth()
    const dispatch = useAppDispatch();
    const user = useAppSelector(authSelectors.user);
    const handleClick = () => {
        dispatch(pressLogin(true))
    }

    return {
        logOut,
        user,
        handleClick
    }
}

export default useNavigation
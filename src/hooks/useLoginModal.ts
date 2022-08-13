import { useState } from "react";

import { emailReg } from "../helpers/utils";
import { pressLogin } from "../redux/slices/authSlice/auth.action";
import { useAppDispatch } from "../redux/store";
import useAuth from "./useAuth";


const useLoginModal = () => {
    const { signIn } = useAuth()
    const [passError, setPassError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch();

    const handleCloseButton = () => {
        dispatch(pressLogin(false))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPassError('')
        setEmailError('')
        if (!email.match(emailReg)) {
            return setEmailError('Please enter a valid email')
        } else if (password.length < 6) {
            return setPassError('More than 6 ');
        } else {
            const user = {
                name: email.split('@')[0],
                mail: email,
                password: password
            }
            signIn(user)
            dispatch(pressLogin(false))
        }
    }

    return {
        passError,
        emailError,
        email,
        password,
        setEmail,
        setPassword,
        handleCloseButton,
        handleSubmit
    }
}

export default useLoginModal
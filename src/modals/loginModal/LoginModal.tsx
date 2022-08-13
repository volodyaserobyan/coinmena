import React from "react";

import useLoginModal from "../../hooks/useLoginModal";

import './LoginModal.scss'

const LoginModal: React.FC = () => {
    const {
        handleSubmit,
        emailError,
        passError,
        email,
        setEmail,
        password,
        setPassword,
        handleCloseButton
    } = useLoginModal()

    return (
        <div className="LoginModal">
            <div className="LoginModal-container">
                <div className="LoginModal-container__header">
                    <h6>Sign In</h6>
                </div>
                <form onSubmit={handleSubmit} className="LoginModal-container__main">
                    <div>
                        <p>{emailError}</p>
                        <input
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>{passError}</p>
                        <input
                            placeholder="Enter your password"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input className="LoginModal-container__main__submit" type="submit" value='Submit' />
                </form>
                <div className="LoginModal-container__footer">
                    <button onClick={handleCloseButton}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
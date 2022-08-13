import React from 'react'
import { Link } from 'react-router-dom'

import { isEmpty } from '../../helpers/utils'
import useNavigation from '../../hooks/useNavigation'

import './Navigation.scss'

const Navigation: React.FC = () => {
    const { user, handleClick, logOut } = useNavigation()
    return (
        <header className='menu'>
            <nav className='Navigation'>
                <div className='Navigation-content'>
                    <Link to='/' className='Navigation-content__item'>Home</Link>
                    <Link to='/trade' className='Navigation-content__item'>Trade</Link>
                </div>
                <div className='Navigation-user'>
                    {isEmpty(user) ? <button onClick={handleClick}>Log in</button> :
                        <div className='Navigation-user__existing'>
                            <div className='Navigation-user__existing__name'>
                                <p>{user.name}</p>
                                <p>{user.mail}</p>
                            </div>
                            <button className='Navigation-user__btn' onClick={() => logOut()}>Log Out</button>
                        </div>}
                </div>
            </nav>
        </header>
    )
}

export default Navigation
import React from "react";
import style from './Header.module.scss'

import userImage from '../../../images/header/user.svg'
import hamburgerImage from '../../../images/header/hamburger.svg'

const Header = () => {
    return <header className={style.header}>
        <button type='button'>
            <img src={userImage} alt="Auth"/>
        </button>
        <button type='button'>
            <img src={hamburgerImage} alt="Hamburger"/>
        </button>
    </header>
}

export default Header
import React from "react";
import './Header.css';
import Logo from './HeaderLogo';
import NavMenu from './BurgerMenu';

function Header () {
    return (
        <header>
            <Logo />
            <NavMenu />
        </header>
        );
}

export default Header;
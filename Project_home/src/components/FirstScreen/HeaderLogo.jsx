import React from "react";
import ImgLogo from '../img/windows.png';
import './HeaderLogo.css';

function Logo () {
    return (
        <div className="logo">
            <img  src={ImgLogo} alt="logo"/>
            <h3>Справні Вікна</h3>
        </div>
    );
}

export default Logo;
import React, { useState } from "react";
import './BurgerMenu.css';
import BackDropLogin from "./HeaderLogin";


function FullMenu () {
    return (
        <ul id="fullMenu">
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Послуги</a></li>
            <li><a href="#">Контакти</a></li>
            <li><a href="#">Галерея</a></li>
        </ul>
    );
}
function NavWrap () {
    const [isHidden, setHidden] = useState(true);
    function onState (isHidden) {
        if (isHidden) {
            setHidden(false);          
        }else {
            setHidden(true);
        }
    }
    // console.log(isHidden);
   
    return (
        <nav id="wrap" className={isHidden ?"wrap": 'wrap open' }>
           <div id="shortMenu" className="closed show">
            <button onClick={() => onState(isHidden)} className="burger_menu_btn" id="burger_btn">
                <span id="spanMenu"></span>
                <span id="spanMenu2"></span>
                <span id="spanMenu3"></span>
            </button>
            <ul id="menu" className="menu">
                <li ><a  href="#">Про нас</a></li>
                <li ><a  href="#">Послуги</a></li>
                <li ><a href="#">Контакти</a></li>
                <li ><a  href="#">Галерея</a></li>
            </ul>
        </div>
            <FullMenu />
        </nav>
    );
}
function NavMenu () {
    return (
        <div className="navBtn"> 
        <NavWrap />
        <BackDropLogin />
        </div>
    );
}

export default NavMenu;
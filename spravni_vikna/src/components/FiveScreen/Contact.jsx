import React from "react";
import TelegramImg from '../img/telegram.png';
import './Contact.css';

function FooterH34 () {
    return (
        <div className="footerH34">
            <h4>Справні Вікна</h4>
            <h3>Ремонт вікон та дверей</h3>
        </div>
    );
}
function TelFooter () {
    return (
        <div className="telFooter">
            <a href="tel:+3(063)4695007" title="telegram"> <img src={TelegramImg} title="telegram" alt="telegram"/> <span>(063) 469 50 07</span></a>
        </div>
    );
}
function Contact () {
    return (
        <div className="contact">
            <FooterH34 />
            <TelFooter />
         </div>
    );
}

export default Contact;
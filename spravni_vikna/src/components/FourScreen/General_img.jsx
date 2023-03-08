import React from 'react';
import './General_img.css';
import Foto9 from '../img/foto9.jpg';
import Furnitura3 from '../img/furnitura3.jpg';

function Block () {
    return (
        <div className="block">
            <h3>Для чого замінюють ущільнювач</h3>
        </div>
    );
}
function BlockOneImgP () {
    return (
        <div>
            <img src={Foto9} alt="foto9"/>
            <p className="special">Якщо у Вашому будинку або квартирі встановлені металопластикові вікна, то Ви, швидше за все, помічали, що в холодну пору року, при повністю закритому положенні вікна та максимальному притисканні стулки до рами, має місце невелике продування між рамою та стулкою... </p>
        </div>
    );
}
function BlockOneCheck () {
    return (
        <div className="check">
            <a href="#">Детальніше...</a>
        </div>
    );
}
function BlockOneFromGeneral () {
    return (
        <div className="block_1">
            <Block />
            <BlockOneImgP />
            <BlockOneCheck />
        </div>
    );
}
function BlockTwo () {
    return (
        <div className="block">
             <h3>Ремонт фурнітруи</h3>
        </div>
    );
}
function BlockTwoImgP () {
    return (
        <div>
            <img src={Furnitura3} alt="foto9"/>
            <p className="special">Фурнітура, як і будь-який інший механізм, потребує постійного догляду. Для цього її необхідно періодично змащувати олією (без вмісту смоли та кислоти) та оглядати всі рухливі елементи на наявність дефектів. Проте варто зазначити, що згодом із вікон може продувати...</p>
        </div>
    );
}
function BlockTwoCheck () {
    return (
        <div className="check">
            <a href="#">Детальніше...</a>
        </div>
    );
}
function BlockTwoFromGeneral () {
    return (
        <div className="block_2">
            <BlockTwo />
            <BlockTwoImgP />
            <BlockTwoCheck />
        </div>
    );
}
function GeneralImg () {
    return (
        <div className="general_img">
             <BlockOneFromGeneral />
             <BlockTwoFromGeneral />
         </div>
    );
}

export default GeneralImg;
import React from 'react';
import './Gallery.css';
import Gallery_1 from '../img/gallery/fotogal.png';
import Gallery_2 from '../img/gallery/foto1.jpg';
import Gallery_3 from '../img/gallery/foto13.png';
import Gallery_4 from '../img/gallery/foto3.jpg';

function GalleryOne () {
    return (
        <figure className="galley_1">
            <figcaption>Регулювання</figcaption>
            <img src={Gallery_1} alt="foto1"/>
        </figure>
    );
}
function GalleryTwo () {
    return (
        <figure className="galley_2">
            <figcaption>Ремонт фурнітури</figcaption>
            <img src={Gallery_2} alt="foto20"/>
    </figure>
    );
}
function GalleryThree () {
    return (
        <figure className="galley_3">
            <figcaption>Установка прижима</figcaption>
            <img src={Gallery_3} alt="foto13"/>
    </figure>
    );
}
function GalleryFour () {
    return (
        <figure className="show closed">
            <figcaption>Ремонт вікон</figcaption>
            <img src={Gallery_4} alt="foto3"/>
        </figure>
    );
}
function Gallery () {
    return (
        <div className="galley">
              <GalleryOne />
              <GalleryTwo />
              <GalleryThree />
              <GalleryFour />
         </div>
    );
}


export default Gallery;
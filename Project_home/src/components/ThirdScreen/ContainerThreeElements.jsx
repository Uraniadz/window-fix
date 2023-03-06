import React from "react";
import './ContainerThreeElements.css';
import Gallery from "./Gallery";

function ContainerThreeH3H2 () {
    return (
        <div>
            <h3>Наші роботи</h3>
            <h2>Ремонт вікон та дверей</h2>
        </div>  
    );
}
function Check () {
    return (
        <div className="check">
            <a href="#">Детальніше...</a>
        </div>
    );
}
function ContainerThreeElements () {
    return (
        <div className="containerThree">
            <ContainerThreeH3H2 />
            <Gallery />
            <Check />
        </div>
    );
}

export default ContainerThreeElements;
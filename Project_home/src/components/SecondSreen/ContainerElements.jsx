import React from "react";
import Choose from "./Choose";
import './ContainerElements.css';

function ContainerH2H3 () {
    return (
        <>
            <h3>Наші послуги та їх вартість</h3>
            <h2>Регулювання та ремонт металопластикових вікон та дверей</h2>
        </>  
    );
}
function Check () {
    return (
        <div className="check">
            <a href="#">Детальніше...</a>
        </div>
    );
}
function ContainerElements () {
    return (
        <div className="container">
            <ContainerH2H3 />
            <Choose />
            <Check />
        </div>
    );
}


export default ContainerElements;
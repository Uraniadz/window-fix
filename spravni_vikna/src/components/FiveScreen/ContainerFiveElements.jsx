import React from "react";
import './ContainerFiveElements.css';
import Contact from "./Contact";
import LinkQuick from "./LinkQuick";

function ContainerFiveElements () {
    return (
        <div className="generalContact">
            <Contact />
            <LinkQuick />
        </div>
    );
}

export default ContainerFiveElements;
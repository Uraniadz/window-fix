import React from "react";
import './ContainerFourElements.css';
import General_img from "./General_img";

function ContainerFourH3H2 () {
    return (
        <div>
            <h3 className='toArticleH3'>Рекомендовані статті</h3>
            <h2>Все про ремонт та обслуговування вікон</h2>
        </div>  
    );
}
function ContainerFourElements () {
    return (
        <div className="containerFour">
          <ContainerFourH3H2 />
          <General_img />
        </div>
    );
}

export default ContainerFourElements;
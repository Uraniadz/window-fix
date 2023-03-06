import React, { useRef } from "react";
import './BackDropForm.css';
import Vector from '../img/vector.png';

function createWrapperAndAppendToBody (wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

function ReactPortal({children, wrapperId = 'react-portal-wrapper'}) {
let element = document.getElementById('wrapperId');
if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
}
return ReactPortal(children, element);
}

function BackDropForm ({isOpen, handleClick}) {
    const inputRef = useRef();
    if (!isOpen) return null;
    return (
        <ReactPortal> 
         <div className="back-drop" id="back-drop">
         <form action="" >
        <div className="divImg">
        <img onClick={handleClick} id="close" className="close" src={Vector} alt="vector"/>
        </div>
        <h2 id="h2">Заповніть форму,<br/>щоб замовити дзвінок</h2>
        <input ref={inputRef} type="text" placeholder="Ваше ім'я..." />
        <input ref={inputRef}  type="email" placeholder="admin.gmail.com" />
        <input ref={inputRef}  type="text" placeholder="Ваш телефон..." />
        <input type="button" className="btn" value="Замовити дзінок"></input>
        </form>
        </div>
        </ReactPortal>
           
    );
}

export default BackDropForm;

// function DivImg () {
//     return (
//         <div className="divImg">
//         <img id="close" className="close" src={Vector} alt="vector"/>
//         </div>
//     )
// }

// function InputForm () {
//     return (
//         <div>
//         <h2 id="h2">Заповніть форму,<br/>щоб замовити дзвінок</h2>
//         <input type="text" placeholder="Ваше ім'я..." />
//         <input type="email" placeholder="admin.gmail.com" />
//         <input type="text" placeholder="Ваш телефон..." />
//         <input type="button" className="btn" value="Замовити дзінок"></input>
//         </div>             
//     );
// }
// function Form () {
//     return (
//         <form action="" >
//             <DivImg />
//             <InputForm />
//         </form>
//     );
// }
// function BackDropForm () {
//     // if (!isOpen) return null;
//     return (
//         <ReactPortal> 
//             <div className="back-drop" id="back-drop">
//             <Form  />
//             </div>
//         </ReactPortal>
           
//     );
// }
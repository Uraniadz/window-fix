import React, { useState } from 'react';
import './TelSubmit.css';
import BackDropForm from './BackDropForm';
import Lang from './Lang';
import Phone2 from '../img/phone2.png'

function Tel () {
    return (
        <div className="tel">
            <a href="tel:+3(095)0835934"> <img src={Phone2} alt="no painting"/> <span>(063) 469 50 07</span></a> 
        </div>
          );
}
function Submit ({onOpen=(f) => f}) {
    return (
        <div className="submit">
            <button onClick={() => onOpen(true)} id="btn" className="reg_btn">Залишити заявку</button>
        </div>
      );
}
function TelSubmit () {
    const [isSignINBackdrop, setSignInBackdrop] = useState(false);
    console.log(isSignINBackdrop);
    const onOpenBackdrop = () => {
        setSignInBackdrop(true);
    }
    return (
        <div className="telSubmit">
            <Tel />
            <Submit 
            onOpen={onOpenBackdrop}/>
            <BackDropForm   
            isOpen={isSignINBackdrop} 
            handleClick={() => setSignInBackdrop(false)}  />
        </div>
    );
}
function langTel () {
    return (
        <div className="langTel">
            <TelSubmit />
            <Lang />
        </div>
    );
}

export default langTel;
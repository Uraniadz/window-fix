import React from "react";
import './HeaderLogin.css';

function BtnExit () {
    return (
        <div className="user hidden" id="user-info">
        <span id="user-name"></span>
        <button className="loginExit" id="sign-out-btn">Вихід</button>
        </div>
    );
}
function BtnEntress () {
    return (
        <button className="login" id="sign-in-btn" type="button">Вхід</button>
    );
}
function BtnCancelSignIn () {
    return (
        <div className="btnCanelExit">
          <button id="btnCancel" type="button" className="btn">Cancel</button>
          <button id="btnSignin" type="submit" className="btn">Sign in</button>
        </div>
    );
}
function FormLogin () {
    return (
        <form action="" id="form" className="form">
        <input name="login" type="text" placeholder="login" autoComplete="off"/> 
        <input name="password" type="password" placeholder="password" autoComplete="off"/>
        <BtnCancelSignIn />
        </form>
    );
}
function BackDropLogin () {
    return (
        <div className="backdrop hidden" id="backdrop">
            <FormLogin />
        </div>
    );
}
function LoginWithBackDrop () {
    return (
        <div>
        <BtnExit />  
        <BtnEntress />
        <BackDropLogin />
        </div>
    );
}

export default LoginWithBackDrop;



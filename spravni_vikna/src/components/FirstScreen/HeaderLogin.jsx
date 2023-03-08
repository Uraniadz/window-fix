import React, { useState } from "react";
import './HeaderLogin.css';


function LoginWithBackDrop () {
    const [isHidden, setHidden] = useState(true);
    return (
        <>
        <div className={isHidden ? 'user hidden' : 'user'} id="user-info">
        <span id="user-name"></span>
        <button onClick={() => setHidden(true)} className="loginExit" id="sign-out-btn">Вихід</button>
        </div>
        <button onClick={() => setHidden(false)} className="login" id="sign-in-btn" type="button">Вхід</button>
        <div className={isHidden ? 'backdrop hidden': 'backdrop'} id="backdrop">
        <form action="" id="form" className="form">
        <input name="login" type="text" placeholder="login" autoComplete="off"/> 
        <input name="password" type="password" placeholder="password" autoComplete="off"/>
        <div className="btnCanelExit">
          <button  onClick={() => setHidden(true)} id="btnCancel" type="button" className="btn">Cancel</button>
          <button id="btnSignin" type="submit" className="btn">Sign in</button>
        </div>
        </form>
        </div>
        </>
    );
}

export default LoginWithBackDrop;


// function BtnEntress () {
//     return (
//         <button className="login" id="sign-in-btn" type="button">Вхід</button>
//     );
// }
// function BtnCancelSignIn () {
//     return (
//         <div className="btnCanelExit">
//           <button id="btnCancel" type="button" className="btn">Cancel</button>
//           <button id="btnSignin" type="submit" className="btn">Sign in</button>
//         </div>
//     );
// }
// function FormLogin () {
//     return (
//         <form action="" id="form" className="form">
//         <input name="login" type="text" placeholder="login" autoComplete="off"/> 
//         <input name="password" type="password" placeholder="password" autoComplete="off"/>
//         <BtnCancelSignIn />
//         </form>
//     );
// }
// function BackDropLogin () {
//     return (
//         <div className="backdrop hidden" id="backdrop">
//             <FormLogin />
//         </div>
//     );
// }
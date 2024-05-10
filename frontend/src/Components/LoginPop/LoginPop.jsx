import React, { useState } from 'react';
import './LoginPop.css';
import { assets } from '../../assets/assets';

const LoginPop = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState("Login")
  return (
    <div className='login-pop'>
      <form action="" className='login-popup-container'>
        <div className="login-pop-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
           
            <input type="email" placeholder='Your email' required/>
            <input type="password" name="" id="" placeholder='Password' required />
        <button>{currentState==="Sign Up" ?"create account":"Login"}</button>
        </div>
        <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required />
            <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Login" ?<p>Create a new account? <span  onClick={()=>setCurrentState("Sign Up")}>Click here</span> </p>
        : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        
       
      </form>
    </div>
  )
}

export default LoginPop
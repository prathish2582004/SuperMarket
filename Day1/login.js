import React, { useState } from 'react';
import './login.css';


const Login = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action === "Login" ? "Login" : "Sign Up"}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action !== "Login" &&
                    <div className='inputs'>
                        <input type="text" placeholder="Name" />
                    </div>
                
                }
                <div className='inputs'>
                    <input type="email" placeholder="Email Id" id='email'required />
                </div>
                <div className='inputs'>
                    <input type="password" placeholder="Password" id='password' required/>
                </div>
            </div>
            {action === "Login" &&
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default Login;
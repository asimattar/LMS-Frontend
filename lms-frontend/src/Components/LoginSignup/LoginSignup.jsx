import React, { useState, useEffect } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    const myMenuFunction = () => {
        var i = document.getElementById("navMenu");

        if (i.className === "nav-menu") {
            i.className += " responsive";
        } else {
            i.className = "nav-menu";
        }
    }

    const login = () => {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        x.style.left = "4px";
        y.style.right = "-520px";
        setAction("Login");
    }

    const register = () => {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        x.style.left = "-510px";
        y.style.right = "5px";
        setAction("Register");
    }

    useEffect(() => {
        document.getElementById("loginBtn").addEventListener("click", login);
        document.getElementById("registerBtn").addEventListener("click", register);

        return () => {
            document.getElementById("loginBtn").removeEventListener("click", login);
            document.getElementById("registerBtn").removeEventListener("click", register);
        };
    }, []);

    return (
        <div id="wrapper">
            <nav className="nav">
                <div className="nav-logo">
                    <p>Leave Management</p>
                </div>
                
                <div className="nav-menu-btn">

                    <i className="bx bx-menu" onClick={myMenuFunction}></i>
                </div>
                <div className="nav-menu" id="navMenu">
                    <ul className='nav-links'>
                        <li className='nav-item'><a href="#">Home</a></li>
                        <li className='nav-item'><a href="#">About</a></li>
                        <li className='nav-item'><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className={`btn ${action === "Login" ? "white-btn" : ""}`} id="loginBtn">Sign In</button>
                    <button className={`btn ${action === "Register" ? "white-btn" : ""}`} id="registerBtn">Sign Up</button>
                </div>
            </nav>

            <div className="form-box">
                <div className="login-container" id="login">
                    <div className="top">
                        <span>Don't have an account? <a href="#" onClick={() => register()}>Sign Up</a></span>
                        <header>Login</header>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Username or Email" />
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="Password" />
                        <i className="bx bx-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <input type="submit" className="submit" value="Sign In" />
                    </div>
                    <div className="two-col">
                        <div className="one">
                            <input type="checkbox" id="login-check" />
                            <label htmlFor="login-check"> Remember Me</label>
                        </div>
                        <div className="two">
                            <label><a href="#">Forgot password?</a></label>
                        </div>
                    </div>
                </div>

                <div className="register-container" id="register">
                    <div className="top">
                        <span>Have an account? <a href="#" onClick={() => login()}>Login</a></span>
                        <header>Sign Up</header>
                    </div>
                    <div className="two-forms">
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Firstname" />
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Lastname" />
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Email" />
                        <i className="bx bx-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="Password" />
                        <i className="bx bx-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <input type="submit" className="submit" value="Register" />
                    </div>
                    <div className="two-col">
                        <div className="one">
                            <input type="checkbox" id="register-check" />
                            <label htmlFor="register-check"> Remember Me</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;

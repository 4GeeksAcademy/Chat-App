import React from "react";
import add from "../../img/add.png"
import "./Login.css"; // Asegúrate de importar tu archivo CSS

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Nonos Chat</span>
                <span className="title">Login</span>
                <form>
                   
                    <input type="email" placeholder="Email" className="inputField" />
                    <input type="password" placeholder="Password" className="inputField" />
                    
                    <button className="submitButton">Sign up</button>
                </form>
                <p > You dont have an account? Register </p>
            </div>
        </div>
    )
}

export default Login;

import React from "react";
import add from "../../img/add.png"
import "./Register.css"; // Asegúrate de importar tu archivo CSS

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Nonos Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display Name" className="inputField" />
                    <input type="email" placeholder="Email" className="inputField" />
                    <input type="password" placeholder="Password" className="inputField" />
                    <input type="file" id="file" className="inputField" />
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span> Add an avatar </span>

                    </label>
                    <button className="submitButton">Sign up</button>
                </form>
                <p >Do you have an account? Login </p>
            </div>
        </div>
    )
}

export default Register;

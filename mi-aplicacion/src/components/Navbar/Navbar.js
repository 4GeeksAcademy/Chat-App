import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">Nonos Chat </span>
            <div className="user">
                <img src="https://images.pexels.com/photos/18187424/pexels-photo-18187424.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                <span>Antonio</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;
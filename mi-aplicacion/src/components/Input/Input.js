import React from "react";
import "./Input.css";
import Img from "../../img/img.png"
import Attach from "../../img/attach.png"
import { FaPaperclip, FaFileImage, FaPaperPlane } from 'react-icons/fa';

const Input = () => {
    return(
        <div className="input">
            <input className="input2" type="text" placeholder="Type something..." />
          <div className="send">
            
            <img src={Attach} alt="" />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
            
                <img src={Img} alt="" /> 
            </label>
            <button className="buttonSend">
            <FaPaperPlane />Send</button>
          </div>

        </div>
    )
}

export default Input;
import React from "react";
import "./Chat.css";
import cam from "../../img/cam.png"
import Add from "../../img/add.png"
import More from "../../img/more.png"
import { FaCamera, FaPlus, FaEllipsisH } from 'react-icons/fa';
import Messages from "../Messages/Messages";
import Input from "../Input/Input";


const Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                <FaCamera />
        <FaPlus />
        <FaEllipsisH />
                    {/* <img src={cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" /> */}
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat;
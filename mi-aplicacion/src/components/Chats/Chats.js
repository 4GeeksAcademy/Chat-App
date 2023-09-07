import React from "react";
import "./Chats.css";

const Chats = () => {
    return(
        <div className="chats">
            
            <div className="userChat">
                <img src="https://images.pexels.com/photos/18187424/pexels-photo-18187424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/18187424/pexels-photo-18187424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/18187424/pexels-photo-18187424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>


        </div>
    )
}

export default Chats;
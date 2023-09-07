import React from "react";
import "./Search.css";

const Search = () => {
    return(
        <div className="search"> 
        <div className="searchForm">
            <input type="text" placeholder="Find a user" />
        </div>
        <div className="userChat">
            <img className="img2" src="https://images.pexels.com/photos/18187424/pexels-photo-18187424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
        
        </div>
    )
}

export default Search;
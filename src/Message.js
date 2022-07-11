import React from "react";
import "./styles/style.css";

const Message = ({msg})=>{
    return (
        <div className="msg">
            <p>{msg}</p>
            <button> Delete </button>
        </div>
    );

}

export default Message;
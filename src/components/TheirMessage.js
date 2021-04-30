import React from 'react';

const TheirMessage = ({message, isFirstMessageByUser}) => {

    const isAttachement = message.attachments && message.attachments.length > 0;
    
    return (
        <div
            className = "message" 
            style = {{
                float: "left", 
                marginLeft: "18px",
                backgroundColor: "rgb(255,255,255)"
            }}
        >

            <div className = "message-sender-details">
                {isFirstMessageByUser ? 
                    message.sender.first_name + " " + message.sender.last_name
                    : null}
            </div>

            <div className = "message-content">
                {isAttachement ?
                    <img 
                        src = {message.attachments[0].file} 
                        alt = "message-attachment"
                        className = "message-image"
                        style = {{}}
                    /> :
                    message.text}
            </div>


            <div className = "message-details">
                {new Date(message.created).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
            </div>

        </div>    
    )
}

export default TheirMessage;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { faCheckCircle} from '@fortawesome/fontawesome-free'

const TheirMessage = ({message, isFirstMessageByUser}) => {
    if ( message.attachments && message.attachments.length > 0) {
        return (
            <div
                className = "message" 
                style = {{
                    float: "left", 
                    marginLeft: "18px",
                    backgroundColor: "rgb(255,255,255)"
                }}
            >
                {isFirstMessageByUser ? 
                    <div className = "message-sender-details">
                        {message.sender.first_name + " " + message.sender.last_name}
                    </div> : null}
                
                <img 
                    src = {message.attachments[0].file} 
                    alt = "message-attachment"
                    className = "message-image"
                    style = {{}}
                />
                <div className = "message-details">
                        {new Date(message.created).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
                        {/* <FontAwesomeIcon icon = {faCheckCircle} /> */}
                </div>
            </div>
        )
    }

    return (
            <div 
                className = "message" 
                style = {{
                    float: "left", 
                    marginLeft: "18px",
                    backgroundColor: "rgb(255,255,255)"
                }}
            >
                {isFirstMessageByUser ? 
                    <div className = "message-sender-details">
                        {message.sender.first_name + " " + message.sender.last_name}
                    </div> : null}
                {message.text}
                <div className = "message-details">
                    {new Date(message.created).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
                    {/* <FontAwesomeIcon icon = {faCheckCircle} /> */}
                </div>
            </div>
    )
}

export default TheirMessage;
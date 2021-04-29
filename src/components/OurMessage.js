import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { faCheckCircle} from '@fortawesome/fontawesome-free'

const OurMessage = ({message}) => {

    const isAttachement = message.attachments && message.attachments.length > 0

    return (
        <div 
            className = "message" 
            style = {{ 
                float: "right", 
                marginRight: "18px",
                backgroundColor: "rgb(220, 248, 198)"
            }}
        >
            {isAttachement ?
                <img 
                    src = {message.attachments[0].file} 
                    alt = "message-attachment"
                    className = "message-image"
                    style = {{}}
                /> :
                message.text}
                
            <div className = "message-details">
                {new Date(message.created).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
                {/* <FontAwesomeIcon icon = {faCheckCircle} /> */}
            </div>
        </div>
    )
}

export default OurMessage;
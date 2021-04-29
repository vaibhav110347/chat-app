import React from 'react';
import OurMessage from './OurMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
    //console.log(props)

    let {messages, userName, chats} = props;
    let keys = Object.keys(messages);
    let renderedMessages = keys.map((key, index) => {
        let isMyMessage = messages[key].sender_username === userName;
        return (
            <div key = {`msg_${index}`}className = "message-block">
                {isMyMessage ?
                     <OurMessage message = {messages[key]} style = {{}}/> :
                     <TheirMessage 
                        message = {messages[key]} 
                        isFirstMessageByUser = {index === 0 || messages[key]?.sender_username !== messages[keys[index - 1]]?.sender_username}
                        style = {{}}
                    />}
            </div>
        )
    })
    return (
        <div className = "chat-feed">
            <div className= "message-section">
                {renderedMessages}
            </div>
            <div className = "message-form-container">
                <MessageForm {...props}/>
            </div>
        </div>
    );
};

export default ChatFeed;
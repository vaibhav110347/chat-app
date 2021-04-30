import React from 'react';
import OurMessage from './OurMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {

    let {messages, userName, chats, activeChat} = props;
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

    let groupHeader = chats?.[activeChat].title;
    return (
        <div className = "chat-feed">
            <div className = "Group header" style = {{textAlign : 'center', border:'1px solid black', backgroundColor:'lightgray', boxSizing:'border-box', marginBottom:'8px'}}>
                <h2 style = {{}}>{groupHeader}</h2>
            </div>
            <div className= "message-section-wrapper">
                <div className = "message-section">
                    {renderedMessages}
                </div>
            </div>
            <div className = "message-form-container">
                <MessageForm {...props}/>
            </div>
        </div>
    );
};

export default ChatFeed;
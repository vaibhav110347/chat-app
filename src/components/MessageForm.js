import React, { useState } from 'react';
import {sendMessage} from 'react-chat-engine';
import { SendOutlined, UploadOutlined} from '@ant-design/icons';

const MessageForm = (props) => {
    
    const [messageText, setMessageText] = useState('');
    let {activeChat} = props;
    // console.log(props)
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (messageText === '')
            return;
        sendMessage(props, activeChat, {text: messageText, sender_username: props?.userName});

        setMessageText('');
    }

    const onUpload = (e) => {
        sendMessage(props, activeChat, {attachments: e.target.files, sender_username: props?.userName, text: ''})
    }
    return (
        
            <form onSubmit = {onSubmit} className = "message-form">
                <label htmlFor = "upload-button">
                    <span className = "upload-click">
                        <UploadOutlined className = "upload-icon"/>
                    </span>
                </label>
                <input 
                    type = "file"
                    multiple = {false}
                    id = "upload-button"
                    onChange = {onUpload.bind(this)}
                    hidden
                />
                
                <input 
                    type = "text"
                    placeholder = "Type a message"
                    htmlFor = "messageText"
                    value = {messageText}
                    className = "message-form-input"
                    onChange = {(e) => setMessageText(e.target.value)}
                    onSubmit = {onSubmit}
                />

                <label htmlFor = "send-button">
                    <span className = "send-click">
                        <SendOutlined className = "send-icon" />
                    </span>
                </label>
                <button 
                    id = "send-button" 
                    type = "submit" 
                    className = "message-form-send"
                    hidden 
                />

            </form>
        
    );
};

export default MessageForm;
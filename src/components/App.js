import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import '../App.css'

const App = () => {
    const userName = localStorage.getItem('username');
    const password = localStorage.getItem('password')
    if (password != null && userName != null ) {
        return (
                <ChatEngine 
                    height = "100vh"
                    projectID = "fe69e36d-af75-4d0b-8583-c746aedccb32"
                    userName = {userName}
                    userSecret = {password}
                    renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
                />
        );
    }

    return (
        
        <div><LoginForm></LoginForm></div>
    )
        

};

export default App;
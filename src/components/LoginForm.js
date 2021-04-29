import React, { useState } from 'react';

const LoginForm = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }
    return (
        <div className = "welcome-page-container">
            <div style = {{top:'20%', position: 'absolute', fontSize: '20px'}}>
                        <h1>Welcome to chat-app</h1>
            </div>
            
            <div class = "login-form-container">
                <form onSubmit = {onSubmit} class = "login-form">
                    <div className = "username-input-container">
                        <label htmlFor = "username">Username: </label>
                        <input 
                            id = "username"
                            value = {username}
                            type = "text"
                            onChange = {e => setUsername(e.target.value)}
                            placeholder = "type username ..."
                            className = "login-form-input"
                        />
                    </div>

                    <div className = "password-input-container">
                        <label htmlFor = "password">Password: </label>
                        <input 
                            id = "username"
                            value = {password}
                            type = "password"
                            onChange = {e => setPassword(e.target.value)}
                            placeholder = "type password ..."
                            className = "login-form-input"
                        />
                    </div>
                    <button type = "submit" onSubmit = {onSubmit} hidden>
                        Sign in
                    </button>
                    <div style = {{textAlign:'center'}}>
                        <b>Press Enter to begin chatting :) </b>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
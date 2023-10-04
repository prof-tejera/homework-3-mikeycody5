import React, { useState } from 'react';
import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(props.onSubmit) {
            props.onSubmit(email, password);
        }
    };

    return (
        <Panel backgroundColor="white"> 
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Button onClick={handleSubmit} text="Login" />
                </div>
            </form>
        </Panel>
    );
};

export default LoginForm;



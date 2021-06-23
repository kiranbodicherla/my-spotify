import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            
            <img src = "https://www.legalexecutiveinstitute.com/wp-content/uploads/2021/03/spotify-logo-png-file-spotify-badge-large-png-1280.png" width="25%" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;

import background from "../assets/images/background/FondoRHLogos.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import logo from "../assets/images/logos/Logo RH para Web-04.png"
import React, { useState } from "react"
import PropTypes from 'prop-types'

async function loginUser (credentials) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        
}
 
export default function Login({ setToken }) {
    // const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        window.location.assign('/dashboard');
    }

    return (
        <div className="login-container" style={{ backgroundImage: `url(${background})` }}>
            <div className="box">
                {/* <h2>HR Hub | by SuperCream</h2> */}
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="HR Hub Logo"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input 
                            type="text" 
                            name="" 
                            value={username}
                            onChange={e => setUsername(e.target.value)} 
                            required 
                        />
                        <label><FontAwesomeIcon icon={faUser}/> Usuario </label>
                    </div>
                    <div className="inputBox">
                        <input 
                            type="password" 
                            name=""
                            value={password}
                            onChange={e => setPassword(e.target.value)}  
                            required 
                        />
                        <label><FontAwesomeIcon icon={faLock}/> Contraseña </label>
                    </div>
                    <button className="login-btn" type="submit">INICIAR SESIÓN <FontAwesomeIcon icon={faRightToBracket} /> </button>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
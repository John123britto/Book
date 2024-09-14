import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        axios.post('http://localhost:5000/api/auth/register', { email, password })
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error('Registration error:', error);
            });
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;

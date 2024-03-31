import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/user/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/home'); 
    } catch (error) {
        console.error("Login failed: ", error.response ? error.response.data : error.message);
        alert('Invalid credentials'); 
      }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}

export default Login;

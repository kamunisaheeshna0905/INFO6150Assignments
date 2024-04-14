import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { loginSuccess } from '../states/userSlice'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const type = useSelector(state => state.auth.type); 
    const error = useSelector(state => state.auth.error);

    const handleLogin = async (event) => {
        event.preventDefault(); 
        
        const response = await fetch('http://localhost:3002/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: username , password }),
        });
        
        if (response.ok) {
            const data = await response.json();
            dispatch(loginSuccess({ token: data.token, type: data.type }));
            console.log(data.type);
          //  fetchProtectedData(data.token);
            // navigate(data.type === 'admin' ? '/AdminHomePage' : '/EmployeeDetails');
            if (data.type === 'admin') {
                navigate('/AdminHomePage');
            } else {
                navigate('/EmployeeDetails');
            }
        } else {
            console.error('Login failed:', response.statusText);
            alert('Login failed!');
        }};
  

    return (
        <div>
            <Typography variant="h2">Login Page</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleLogin}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        id="username"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="userType-label">User Type</InputLabel>
                    <Select
                        labelId="userType-label"
                        id="userType"
                        value={type || 'admin'} 
                        onChange={(e) => dispatch(loginSuccess({ type: e.target.value }))}>
                        
                        <MenuItem value="employee">Employee</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                    <FormHelperText>Select user type</FormHelperText>
                </FormControl>
                <Button variant="contained" type="submit">Login</Button>
            </form>
        </div>
    );
};

export default LoginPage;
